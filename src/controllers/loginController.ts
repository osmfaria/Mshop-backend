import { Request, Response } from 'express'
import loginService from '../services/login/loginService'

export const loginController = async (request: Request, response: Response) => {
  const { email, password } = request.inputData

  const { token, id, name } = await loginService(email, password)

  response.json({ token, id, name })
}
