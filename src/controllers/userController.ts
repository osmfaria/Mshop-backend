import { Request, Response } from 'express'
import createUserService from '../services/user/userCreateService'
import userDeleteService from '../services/user/userDeleteService'
import userListOneService from '../services/user/userListOneService'
import userListService from '../services/user/userListService'
import userUpdateService from '../services/user/userUpdateService'

export const createUserController = async (
  request: Request,
  response: Response
) => {
  const data = request.inputData

  const user = await createUserService(data)

  return response.status(201).json(user)
}

export const listOneUserController = async (
  request: Request,
  response: Response
) => {
  const userId = request.params.user_id

  const user = await userListOneService(userId)

  response.json(user)
}

export const listUserController = async (
  request: Request,
  response: Response
) => {
  console.log('test list aqui')
  const { page, limit } = request.pagination
  const users = await userListService(page, limit)

  response.json(users)
}

export const updateUserController = async (
  request: Request,
  response: Response
) => {
  const data = request.inputData
  const id = request.params.user_id
  const user = await userUpdateService(id, data)

  response.json(user)
}

export const deleteUserController = async (
  request: Request,
  response: Response
) => {
  const id = request.params.user_id
  await userDeleteService(id)

  response.status(204).send('Success!')
}
