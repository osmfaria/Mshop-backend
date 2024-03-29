import { Router } from 'express'
import {
  createCommentController,
  deleteCommentController,
  listCommentsByPublicationController,
  updateCommentController,
} from '../controllers/commentController'
import isCommentOwnerOrAdminMiddlewarew from '../middlewares/isCommentOwnerOrAdminMiddleware'
import pagination from '../middlewares/paginateMiddleware'
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
  pagination,
  listCommentsByPublicationController
)
commentRouter.delete(
  '/:comment_id',
  tokenValidation,
  isCommentOwnerOrAdminMiddlewarew,
  deleteCommentController
)
commentRouter.patch(
  '/:comment_id',
  tokenValidation,
  validate(commentCreateSchema),
  updateCommentController
)

export default commentRouter
