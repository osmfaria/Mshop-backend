import { AppError } from '../../../errors/appError'
import { prismaClient } from '../../database/prismaClient'
import { IUserGeneral } from '../../interfaces/userInterface'

const userListOneGeneralService = async (
  id: string
): Promise<IUserGeneral> => {
  const user = await prismaClient.user.findUnique({
    where: {
      id: id,
    },
    select: {
      name: true,
      description: true,
    }
  })

  if (!user) {
    throw new AppError('User not found', 404)
  }


  return user
}

export default userListOneGeneralService
