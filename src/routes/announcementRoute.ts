import { Router } from 'express'
import { createAnnoucementController } from '../controllers/annoucementController'
import { listAnnoucementController } from '../controllers/annoucementController'
import { listOneAnnoucementController } from '../controllers/annoucementController'
import { updateAnnoucementController } from '../controllers/annoucementController'
import { deleteAnnoucementController } from '../controllers/annoucementController'

const announcementRouter = Router()

announcementRouter.post('/:user_id',createAnnoucementController)
announcementRouter.get('',listAnnoucementController)
announcementRouter.get('/:id',listOneAnnoucementController)
announcementRouter.patch('',updateAnnoucementController)
announcementRouter.delete('',deleteAnnoucementController)

export default announcementRouter