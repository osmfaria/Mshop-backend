import { AppError } from '../../../errors/appError'
import { prismaClient } from '../../database/prismaClient'

const commentListByPublicationService = async (id: string) => {
  const publicationExits = await prismaClient.publication.findUnique({
    where: {
      id,
    },
  })

  if (!publicationExits) {
    throw new AppError('Publication not found', 404)
  }

  const publicationComments = await prismaClient.publication.findUnique({
    where: {
      id
    },
    select: {
      Comment: {
        select: {
          id: true,
          description: true,
          createdAt: true,
          updatedAt: true,
          user: {
            select: {
              id: true,
              name: true
            }
          }
        }
      }
    }
  })

  return publicationComments
}

export default commentListByPublicationService