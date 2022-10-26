import { Router } from 'express'
import { deleteImageController } from '../controllers/imageController'
import isImageOwnerOrAdminMiddleware from '../middlewares/isImageOwnerOrAdminMiddleware'
import tokenValidation from '../middlewares/tokenMiddleware'

const imageRouter = Router()

imageRouter.delete(
  '/:image_id',
  tokenValidation,
  isImageOwnerOrAdminMiddleware,
  deleteImageController
)

export default imageRouter
