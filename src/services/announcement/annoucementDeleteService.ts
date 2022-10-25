import { AppError } from '../../../errors/appError'
import { prismaClient } from '../../database/prismaClient'

const publicationDeleteService = async (id: string): Promise<void> => {
    
    const publication = await prismaClient.publication.findUnique({
        where: {
          id: id,
        },
      })

    if (!publication) {
        throw new AppError('Publication not found', 404)
    }

  await prismaClient.publication.delete({
    where: {
      id: id,
    },
  })
}

export default publicationDeleteService
