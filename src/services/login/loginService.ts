import { compare } from 'bcrypt'
import { AppError } from '../../../errors/appError'
import { prismaClient } from '../../database/prismaClient'
import jwt from 'jsonwebtoken'
import { ILogin } from '../../interfaces/loginInterface'


const loginService = async (
  email: string,
  password: string
): Promise<ILogin> => {
  const user = await prismaClient.user.findUnique({
    where: {
      email,
    },
    select: {
      id: true,
      password: true,
      isAdmin: true,
      account_type: true,
      name: true,
    },
  })

  if (!user) {
    throw new AppError('Invalid email or password', 403)
  }

  const isPasswordValide = await compare(password, user.password)

  if (!isPasswordValide) {
    throw new AppError('Invalid email or password', 403)
  }

  const token = jwt.sign(
    { id: user.id, isAdmin: user.isAdmin, account_type: user.account_type},
    process.env.JWT_SECRET as string,
    {
      expiresIn: '24h',
    }
  )

  return {token, id: user.id, name: user.name}
}

export default loginService
