import { Request, Response, NextFunction } from 'express'
import { AppError } from '../../errors/appError'

const isOwnerMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const loggedUserId = request.userPayload.userId
  const searchId = request.params.user_id

  if (loggedUserId === searchId) {
    next()
  } else {
    throw new AppError('Unauthorized', 401)
  }
}

export default isOwnerMiddleware
