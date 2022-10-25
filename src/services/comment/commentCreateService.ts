import { Comment } from '@prisma/client'
import { AppError } from '../../../errors/appError'
import { prismaClient } from '../../database/prismaClient'
import { IComment } from '../../interfaces/commentInterface'

const commentCreateService = async (
  user_id: string,
  publication_id: string,
  data: IComment
): Promise<Comment> => {
  const publicationExists = await prismaClient.publication.findUnique({
    where: {
      id: publication_id,
    },
  })

  if (!publicationExists) {
    throw new AppError('Publication no found', 404)
  }

  const comment = await prismaClient.comment.create({
    data: {
      description: data.description,
      user: {
        connect: {
          id: user_id,
        },
      },
      publication: {
        connect: {
          id: publication_id,
        },
      },
    },
  })

  return comment
}

export default commentCreateService
