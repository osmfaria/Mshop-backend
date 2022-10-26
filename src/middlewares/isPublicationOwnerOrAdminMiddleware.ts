import { Request, Response, NextFunction } from 'express'
import { AppError } from '../../errors/appError'
import { prismaClient } from '../database/prismaClient'

const isPublicationOwnerOrAdminMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const loggedUserId = request.userPayload.userId
  const isAdmin = request.userPayload.isAdmin
  const publicationId = request.params.publication_id

  const publicationExists = await prismaClient.publication.findUnique({
    where: {
      id: publicationId,
    },
  })

  if (!publicationExists) {
    throw new AppError('Publication not found', 404)
  }

  const publicationOwner = await prismaClient.publication.findUnique({
    where: {
      id: publicationId,
    },
    select: {
      user: {
        select: {
          id: true,
        },
      },
    },
  })

  if (loggedUserId === publicationOwner?.user.id || isAdmin) {
    next()
  } else {
    throw new AppError('Unauthorized', 401)
  }
}

export default isPublicationOwnerOrAdminMiddleware
