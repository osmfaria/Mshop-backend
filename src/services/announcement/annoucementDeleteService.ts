import { AppError } from '../../../errors/appError'
import { prismaClient } from '../../database/prismaClient'

const announcementDeleteService = async (id: string): Promise<void> => {
    const announcements = await prismaClient.publication.findUnique({
        where: {
          id: id,
        },
      })

    if (!announcements) {
        throw new AppError('Publication not found', 404)
    }

  await prismaClient.publication.delete({
    where: {
      id: id,
    },
  })
}

export default announcementDeleteService
