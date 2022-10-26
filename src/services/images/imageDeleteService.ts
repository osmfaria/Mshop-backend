import { AppError } from '../../../errors/appError'
import { prismaClient } from '../../database/prismaClient'

const imageDeleteService = async (id: string): Promise<void> => {
  await prismaClient.image.delete({
    where: {
      id,
    },
  })
}

export default imageDeleteService
