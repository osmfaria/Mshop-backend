import { Request, Response, NextFunction } from 'express'
import { AppError } from '../../errors/appError'
import { prismaClient } from '../database/prismaClient'

const isImageOwnerOrAdminMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const loggedUserId = request.userPayload.userId
  const isAdmin = request.userPayload.isAdmin
  const imageId = request.params.image_id

  const image = await prismaClient.image.findUnique({
    where: {
      id: imageId,
    },
    select: {
      publication: {
        select: {
          userId: true,
        },
      },
    },
  })

  if (!image) {
    throw new AppError('Image not found', 404)
  }

  if (loggedUserId === image?.publication.userId || isAdmin) {
    next()
  } else {
    throw new AppError('Unauthorized', 401)
  }
}

export default isImageOwnerOrAdminMiddleware
