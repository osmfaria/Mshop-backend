import { Router } from 'express'
import {
    createPublicationController,
    listPublicationController,
    listOnePublicationController,
    updatePublicationController,
    deletePublicationController } from '../controllers/annoucementController'
import { validate } from '../middlewares/validateMiddleware'
import {publicationCreateSchema,publicationUpdateSchema} from "../schemas/publicationSchema"


const announcementRouter = Router()

announcementRouter.post('/:user_id',validate(publicationCreateSchema),createPublicationController)
announcementRouter.get('',listPublicationController)
announcementRouter.get('/:id',listOnePublicationController)
announcementRouter.patch('/:id',validate(publicationUpdateSchema),updatePublicationController)
announcementRouter.delete('/:id',deletePublicationController)

export default announcementRouter