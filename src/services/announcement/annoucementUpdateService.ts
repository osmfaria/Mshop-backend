import { AppError } from '../../../errors/appError'
import { prismaClient } from '../../database/prismaClient'
import { IPublicationUpdate } from '../../interfaces/publication'
import { Publication } from '@prisma/client'

const publicationUpdateService = async (id:string,data:IPublicationUpdate) => {
    const publications = await prismaClient.publication.findUnique({
        where: {
          id: id,
        },
      })

    if (!publications) {
        throw new AppError('Publication not found', 404)
    }

  await prismaClient.publication.update({
    where: {
      id: id,
    },
    data: data,
  })

  return publications
}

export default publicationUpdateService
