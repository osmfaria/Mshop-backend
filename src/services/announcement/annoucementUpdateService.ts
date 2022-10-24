import { AppError } from '../../../errors/appError'
import { prismaClient } from '../../database/prismaClient'
import { IAnnouncementUpdate } from '../../interfaces/announcementInterface'
import { Publication } from '@prisma/client'

const announcementUpdateService = async (id:string,data:IAnnouncementUpdate) => {
    const announcements = await prismaClient.publication.findUnique({
        where: {
          id: id,
        },
      })

    if (!announcements) {
        throw new AppError('Publication not found', 404)
    }

  await prismaClient.publication.update({
    where: {
      id: id,
    },
    data: data,
  })
}

export default announcementUpdateService
