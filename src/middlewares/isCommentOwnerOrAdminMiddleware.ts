import { Request, Response, NextFunction } from 'express'
import { AppError } from '../../errors/appError'
import { prismaClient } from '../database/prismaClient'

const isCommentOwnerOrAdminMiddlewarew = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const loggedUserId = request.userPayload.userId
  const isAdmin = request.userPayload.isAdmin
  const commentId = request.params.comment_id

  const commentExists = await prismaClient.comment.findUnique({
    where: {
      id: commentId,
    },
  })

  if (!commentExists) {
    throw new AppError('Comment not found', 404)
  }

  const commentOwner = await prismaClient.comment.findUnique({
    where: {
      id: commentId,
    },
    select: {
      user: {
        select: {
          id: true,
        },
      },
    },
  })

  if (loggedUserId === commentOwner?.user.id || isAdmin) {
    next()
  } else {
    throw new AppError('Unauthorized', 401)
  }
}

export default isCommentOwnerOrAdminMiddlewarew
