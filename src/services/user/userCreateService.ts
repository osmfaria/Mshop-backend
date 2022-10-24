import { IUser } from '../../interfaces/userInterface'
import { prismaClient } from '../../database/prismaClient'
import { hash } from 'bcrypt'
import { User } from '@prisma/client'
import { exclude } from '../../functions/excludePassword'
import { AppError } from '../../../errors/appError'

const createUserService = async ({
  name,
  email,
  password,
  cpf,
  phone,
  birthdate,
  description,
}: IUser): Promise<Omit<User, 'password'>> => {
  const hashedPassword = await hash(password, 10)

  const isNotUnique = await prismaClient.user.findFirst({
    where: {
      OR: [{ email }, { cpf }, { phone }],
    },
  })

  if (isNotUnique) {
    throw new AppError(
      'An user with this email, cpf or phone has already been registered'
    )
  }

  const user = await prismaClient.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      cpf,
      phone,
      birthdate,
      description,
    },
  })

  const userWithoutPassword = exclude(user, 'password')

  return userWithoutPassword
}

export default createUserService
