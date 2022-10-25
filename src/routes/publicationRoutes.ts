import { Router } from "express";
import { createPublicationController } from "../controllers/publicationController";


const publicationRouter = Router()

publicationRouter.post('/:user_id', createPublicationController)

export default publicationRouter