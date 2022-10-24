import { Publication } from '@prisma/client'
import { prismaClient } from '../../database/prismaClient'
import { AppError } from "../../../errors/appError";

const announcementListOneService = async (id:string) => {
    
    const announcements = await prismaClient.publication.findUnique({
        where: {
          id: id,
        },
      })

      if (!announcements) {
        throw new AppError('Publication not found', 404)
      }

     return announcements 
    
}

export default announcementListOneService