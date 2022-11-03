import { Router } from "express";
import { loginController } from "../controllers/loginController";
import { validate } from "../middlewares/validateMiddleware";
import loginSchema from "../schemas/loginSchema";


const loginRouter = Router()

loginRouter.post("", validate(loginSchema), loginController)

export default loginRouter