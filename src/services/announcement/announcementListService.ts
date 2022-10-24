import { Publication } from '@prisma/client'
import { prismaClient } from '../../database/prismaClient'

const announcementListService = async (): Promise<Publication[]> => {
  const announcements = await prismaClient.publication.findMany()

  return announcements
}

export default announcementListService