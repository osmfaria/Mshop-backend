import { Request, Response, NextFunction } from 'express'

const pagination = (req: Request, res: Response, next: NextFunction) => {
  let page = 1
  let limit = 3

  if (req.query.page) {
    page = Number(req.query.page)
  }

  if (req.query.limit) {
    limit = Number(req.query.limit)
  }

  req.pagination = { page, limit }
  next()
}

export default pagination
