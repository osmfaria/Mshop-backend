import { Request, Response, NextFunction } from 'express'
import { AppError } from '../../errors/appError'

const isAccountOwnerOrAdminMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const loggedUserId = request.userPayload.userId
  const isAdmin = request.userPayload.isAdmin
  const searchId = request.params.user_id

  if (loggedUserId === searchId || isAdmin) {
    next()
  } else {
    throw new AppError('Unauthorized', 401)
  }
}

export default isAccountOwnerOrAdminMiddleware
