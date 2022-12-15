import { AppError } from '../../../errors/appError'
import { prismaClient } from '../../database/prismaClient'
import { paginateOutput } from '../../functions/paginateOutput'
import { ICommentResponse } from '../../interfaces/commentInterface'

const commentListByPublicationService = async (
  id: string,
  page: number,
  limit: number
): Promise<ICommentResponse> => {
  const publicationExits = await prismaClient.publication.findUnique({
    where: {
      id,
    },
  })

  if (!publicationExits) {
    throw new AppError('Publication not found', 404)
  }

  const publicationComments = await prismaClient.comment.findMany({
    where: {
      publicationId: id,
    },
    orderBy: {
      updatedAt: 'desc',
    },
     include : {
      user: {
        select: {
          name: true
        }
      }
    },
    take: limit,
    skip: (page - 1) * limit,
  })

  const count = await prismaClient.comment.count({where: {publicationId: id}})
  const pagesIndex = paginateOutput(
    count,
    page,
    limit,
    `comments/publication/${id}`
  )

  return { ...pagesIndex, results: publicationComments }
}

export default commentListByPublicationService
