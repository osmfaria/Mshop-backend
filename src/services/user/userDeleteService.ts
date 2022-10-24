import { AppError } from '../../../errors/appError'
import { prismaClient } from '../../database/prismaClient'

const userDeleteService = async (userId: string): Promise<void> => {
  const user = await prismaClient.user.findUnique({
    where: {
      id: userId,
    },
  })

  if (!user) {
    throw new AppError('User not found', 404)
  }

  await prismaClient.user.delete({
    where: {
      id: userId,
    },
  })
}

export default userDeleteService
