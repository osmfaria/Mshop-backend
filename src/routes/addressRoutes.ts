import { Router } from 'express'
import {
  listAddressController,
  updatedAddressController,
} from '../controllers/addressConroller'
import isOwnerOrAdminMiddleware from '../middlewares/isOwnerOrAdminMiddleware'
import tokenValidation from '../middlewares/tokenMiddleware'
import { validate } from '../middlewares/validateMiddleware'
import { addressUpdateSchema } from '../schemas/addressSchema'

const addressRouter = Router()

addressRouter.get('', tokenValidation, listAddressController)
addressRouter.patch(
  '/:user_id',
  tokenValidation,
  isOwnerOrAdminMiddleware,
  validate(addressUpdateSchema),
  updatedAddressController
)

export default addressRouter
