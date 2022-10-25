import { Router } from 'express'
import {
  createUserController,
  deleteUserController,
  listOneUserController,
  listUserController,
  updateUserController,
} from '../controllers/userController'
import isOwnerMiddleware from '../middlewares/isOwnerOrAdminMiddleware'
import tokenValidation from '../middlewares/tokenMiddleware'
import { validate } from '../middlewares/validateMiddleware'
import { userCreateSchema, userUpdateSchema } from '../schemas/userSchema'
import {publicationCreateSchema} from "../schemas/publicationSchema"

const userRouter = Router()

userRouter.post('', validate(userCreateSchema), createUserController)
userRouter.get('', tokenValidation, listUserController)
userRouter.get(
  '/:user_id',
  tokenValidation,
  isOwnerMiddleware,
  listOneUserController
)
userRouter.patch(
  '/:user_id',
  tokenValidation,
  isOwnerMiddleware,
  validate(userUpdateSchema),
  updateUserController
)
userRouter.delete(
  '/:user_id',
  tokenValidation,
  isOwnerMiddleware,
  deleteUserController
)

export default userRouter
