import { User } from '@prisma/client'
import { hash } from 'bcrypt'
import { AppError } from '../../../errors/appError'
import { prismaClient } from '../../database/prismaClient'
import { exclude } from '../../functions/excludePassword'
import { IUserUpdate } from '../../interfaces/userInterface'

const userUpdateService = async (
  userId: string,
  data: IUserUpdate
): Promise<Omit<User, 'password'>> => {
  const user = await prismaClient.user.findUnique({
    where: {
      id: userId,
    },
  })

  if (!user) {
    throw new AppError('User not found', 404)
  }

  if (data.password) {
    const hashedPassword = await hash(data.password, 10)
    data = { ...data, password: hashedPassword }
  }

  const isNotUnique = await prismaClient.user.findFirst({
    where: {
      OR: [{ email: data.email }, { cpf: data.cpf }, { phone: data.phone }],
    },
  })

  if (isNotUnique) {
    throw new AppError(
      'An user with this email, cpf or phone has already been registered'
    )
  }

  const updatedUser = await prismaClient.user.update({
    where: {
      id: userId,
    },
    data: data,
  })

  const updatedUserWithoutPassword = exclude(updatedUser, 'password')

  return updatedUserWithoutPassword
}

export default userUpdateService
