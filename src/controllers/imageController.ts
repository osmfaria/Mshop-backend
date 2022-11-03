import { Request, Response } from 'express'
import imageDeleteService from '../services/images/imageDeleteService'

export const deleteImageController = async (
  request: Request,
  response: Response
) => {
  const imageId = request.params.image_id

  await imageDeleteService(imageId)

  response.status(204).send('Success!')
}
