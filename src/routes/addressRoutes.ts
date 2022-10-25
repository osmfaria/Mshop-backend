import { Router } from 'express'
import {
  listAddressController,
  updatedAddressController,
} from '../controllers/addressConroller'
import isAccountOwnerOrAdminMiddleware from '../middlewares/isAccountOwnerOrAdminMiddleware'
import tokenValidation from '../middlewares/tokenMiddleware'
import { validate } from '../middlewares/validateMiddleware'
import { addressUpdateSchema } from '../schemas/addressSchema'

const addressRouter = Router()

addressRouter.get('', tokenValidation, listAddressController)
addressRouter.patch(
  '/:user_id',
  tokenValidation,
  isAccountOwnerOrAdminMiddleware,
  validate(addressUpdateSchema),
  updatedAddressController
)

export default addressRouter
