import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'

const tokenValidation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(' ')[1]
  
  try {
    jwt.verify(
      token as string,
      process.env.JWT_SECRET as string,
      (error: any, decoded: any) => {
        req.userPayload = { userId: decoded.id, isAdmin: decoded.isAdmin, accountType: decoded.account_type }
        next()
      }
    )
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}
export default tokenValidation
