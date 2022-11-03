import { Request, Response } from 'express'
import commentCreateService from '../services/comment/commentCreateService'
import commentDeleteService from '../services/comment/commentDeleteService'
import commentListByPublicationService from '../services/comment/commentListByPublicationService'

export const createCommentController = async (
  request: Request,
  response: Response
) => {
  const data = request.inputData
  const publication_id = request.params.publication_id
  const user_id = request.userPayload.userId

  const comment = await commentCreateService(user_id, publication_id, data)

  response.json(comment).status(201)
}

export const deleteCommentController = async (
  request: Request,
  response: Response
) => {
  const id = request.params.comment_id

  await commentDeleteService(id)

  response.status(204).send('Success!')
}

export const listCommentsByPublicationController = async (request: Request, response: Response) => {
  const id = request.params.publication_id
  const {page, limit} = request.pagination

  const comments = await commentListByPublicationService(id, page, limit)

  response.json(comments)
}