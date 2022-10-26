import { Request, Response, NextFunction } from 'express'
import { AppError } from '../../errors/appError'
import { prismaClient } from '../database/prismaClient'

const isSellerMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const accountType = request.userPayload.accountType
  if (accountType == 'SELLER') {
    next()
  } else {
    throw new AppError('Unauthorized', 401)
  }
}

export default isSellerMiddleware
