import { Router } from 'express'
import {
  createUserController,
  deleteUserController,
  listOneUserController,
  listUserController,
  updateUserController,
} from '../controllers/userController'
import isAccountOwnerOrAdminMiddleware from '../middlewares/isAccountOwnerOrAdminMiddleware'
import tokenValidation from '../middlewares/tokenMiddleware'
import { validate } from '../middlewares/validateMiddleware'
import { userCreateSchema, userUpdateSchema } from '../schemas/userSchema'

const userRouter = Router()

userRouter.post('', validate(userCreateSchema), createUserController)
userRouter.get('', tokenValidation, listUserController)
userRouter.get(
  '/:user_id',
  tokenValidation,
  isAccountOwnerOrAdminMiddleware,
  listOneUserController
)
userRouter.patch(
  '/:user_id',
  tokenValidation,
  isAccountOwnerOrAdminMiddleware,
  validate(userUpdateSchema),
  updateUserController
)
userRouter.delete(
  '/:user_id',
  tokenValidation,
  isAccountOwnerOrAdminMiddleware,
  deleteUserController
)

export default userRouter
