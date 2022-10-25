import { Publication } from '@prisma/client'
import { prismaClient } from '../../database/prismaClient'
import { AppError } from "../../../errors/appError";

const publicationsListOneService = async (id:string) => {
    
    const publication = await prismaClient.publication.findUnique({
        where: {
          id: id,
        },
      })

      if (!publication) {
        throw new AppError('Publication not found', 404)
      }

     return publication
    
}

export default publicationsListOneService