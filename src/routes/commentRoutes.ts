import { Router } from 'express'
import {
  createCommentController,
  deleteCommentController,
  listCommentsByPublicationController,
} from '../controllers/commentController'
import isCommentOwnerOrAdminMiddlewarew from '../middlewares/isCommentOwnerOrAdminMiddleware'
import tokenValidation from '../middlewares/tokenMiddleware'
import { validate } from '../middlewares/validateMiddleware'
import { commentCreateSchema } from '../schemas/commentSchema'

const commentRouter = Router()

commentRouter.post(
  '/:publication_id',
  tokenValidation,
  validate(commentCreateSchema),
  createCommentController
)
commentRouter.get(
  '/publication/:publication_id',
  listCommentsByPublicationController
)
commentRouter.delete(
  '/:comment_id',
  tokenValidation,
  isCommentOwnerOrAdminMiddlewarew,
  deleteCommentController
)

export default commentRouter
