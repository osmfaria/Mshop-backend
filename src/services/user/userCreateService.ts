import { IUser } from '../../interfaces/userInterface'
import { prismaClient } from '../../database/prismaClient'
import { hash } from 'bcrypt'
import { User } from '@prisma/client'
import { exclude } from '../../functions/excludePassword'
import { AppError } from '../../../errors/appError'

const createUserService = async (data: IUser): Promise<Omit<User, 'password'>> => {
  
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
  
  const hashedPassword = await hash(data.password, 10)
  data = {...data, password: hashedPassword}
  
  const user = await prismaClient.user.create({
    data,
  })

  const userWithoutPassword = exclude(user, 'password')
  
  return userWithoutPassword
}

export default createUserService
