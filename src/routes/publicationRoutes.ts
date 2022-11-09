import { Router } from 'express'
import {
  createPublicationController,
  deletePublicationController,
  listOnePublicationController,
  listPublicationByUserController,
  listPublicationController,
  publicationListByVehicleTypeController,
  updatePublicationController,
} from '../controllers/publicationController'
import isPublicationOwnerOrAdminMiddleware from '../middlewares/isPublicationOwnerOrAdminMiddleware'
import isSellerMiddleware from '../middlewares/isSellerMiddleware'
import pagination from '../middlewares/paginateMiddleware'

import tokenValidation from '../middlewares/tokenMiddleware'
import { validate } from '../middlewares/validateMiddleware'
import {
  publicationCreateSchema,
  publicationUpdateSchema,
} from '../schemas/publicationSchema'

const publicationRouter = Router()

publicationRouter.post(
  '',
  tokenValidation,
  isSellerMiddleware,
  validate(publicationCreateSchema),
  createPublicationController
)
publicationRouter.get('', pagination, listPublicationController)
publicationRouter.get('/:publication_id', listOnePublicationController)
publicationRouter.get(
  '/users/:user_id',
  pagination,
  listPublicationByUserController
)
publicationRouter.get(
  '/vehicle_type/:vehicle_type',
  pagination,
  publicationListByVehicleTypeController
)
publicationRouter.delete(
  '/:publication_id',
  tokenValidation,
  isPublicationOwnerOrAdminMiddleware,
  deletePublicationController
)
publicationRouter.patch(
  '/:publication_id',
  tokenValidation,
  validate(publicationUpdateSchema),
  isPublicationOwnerOrAdminMiddleware,
  updatePublicationController
)

export default publicationRouter
