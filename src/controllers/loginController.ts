import { Request, Response } from 'express'
import loginService from '../services/login/loginService'

export const loginController = async (request: Request, response: Response) => {
  const { email, password } = request.inputData

  const token = await loginService(email, password)

  response.json({ token: token })
}
