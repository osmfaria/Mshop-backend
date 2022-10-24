import { Router } from "express";
import { loginController } from "../controllers/loginController";
import { validate } from "../middlewares/validateMiddleware";
import loginSchema from "../schemas/loginSchema";


const loginRoute = Router()

loginRoute.post("", validate(loginSchema), loginController)

export default loginRoute