import { compare } from 'bcrypt'
import { AppError } from '../../../errors/appError'
import { prismaClient } from '../../database/prismaClient'
import jwt from 'jsonwebtoken'

const loginService = async (
  email: string,
  password: string
): Promise<string> => {
  const user = await prismaClient.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      password: true,
    },
  })

  if (!user) {
    throw new AppError('Invalid email or password', 403)
  }

  const isPasswordValide = await compare(password, user.password)

  if (!isPasswordValide) {
    throw new AppError('Invalid email or password', 403)
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
    expiresIn: '24h',
  })

  return token
}

export default loginService