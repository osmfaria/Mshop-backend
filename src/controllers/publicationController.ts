import { Request, Response } from 'express'
import publicationDeleteService from '../services/publication/publicationDeleteService'
import publicationUpdateService from '../services/publication/publicationUpdateService'
import publicationsListOneService from '../services/publication/publicationListOneService'
import publicationsListService from '../services/publication/publicationListService'
import publicationCreateService from '../services/publication/publicationCreateService'
import publicationListByUserService from '../services/publication/publicationListByUserService'
import publicationListByVehicleTypeService from '../services/publication/publicationListByVehicleTypeService'
import { Vehicle_Type } from '@prisma/client'

export const createPublicationController = async (
  request: Request,
  response: Response
) => {
  const data = request.inputData
  const userId = request.userPayload.userId

  const publication = await publicationCreateService(userId, data)

  response.json(publication).status(201)
}

export const listPublicationController = async (
  request: Request,
  response: Response
) => {
  const { page, limit } = request.pagination
  const publication = await publicationsListService(page, limit)

  response.json(publication)
}

export const listOnePublicationController = async (
  request: Request,
  response: Response
) => {
  const { publication_id } = request.params
  const publication = await publicationsListOneService(publication_id)

  response.json(publication)
}

export const deletePublicationController = async (
  request: Request,
  response: Response
) => {
  const { publication_id } = request.params
  await publicationDeleteService(publication_id)

  response.status(204).send('Success!')
}

export const updatePublicationController = async (
  request: Request,
  response: Response
) => {
  const data = request.inputData
  const { publication_id } = request.params

  const publication = await publicationUpdateService(publication_id, data)

  response.json(publication)
}

export const listPublicationByUserController = async (
  request: Request,
  response: Response
) => {
  const { user_id } = request.params
  const { page, limit } = request.pagination

  const publications = await publicationListByUserService(user_id, page, limit)

  response.json(publications)
}

export const publicationListByVehicleTypeController = async (
  request: Request,
  response: Response
) => {
  const { vehicle_type } = request.params
  const { page, limit } = request.pagination

  const publications = await publicationListByVehicleTypeService(
    vehicle_type.toUpperCase() as Vehicle_Type,
    page,
    limit
  )

  response.json(publications)
}
