import { Request, Response } from 'express'
import publicationCreateService from '../services/publication/publicationCreateService'

export const createPublicationController = async (
  request: Request,
  response: Response
) => {
    const data = request.body
    const id = request.params.user_id

    const publication = await publicationCreateService(id, data)

    response.json(publication).status(201)
}
