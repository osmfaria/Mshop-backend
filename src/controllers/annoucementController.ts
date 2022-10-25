import { Request, Response } from 'express'
import createPublicationService from '../services/announcement/announcementCreateService'
import publicationListService from '../services/announcement/announcementListService'
import publicationUpdateService from '../services/announcement/annoucementUpdateService'
import publicationDeleteService from '../services/announcement/annoucementDeleteService'
import publicationListOneService from '../services/announcement/announcementListOneService'


export const createPublicationController = async (req: Request,res: Response) => {
  
  const {user_id} = req.params
  const {type,title,year,milieage,price,description,vehicle_type,link} = req.body

 
  const publication = await createPublicationService({user_id,type,title,year,milieage,price,description,vehicle_type,link})
  
    return res.status(201).json(publication)
  }


export const listPublicationController = async (req: Request,res: Response) => {
    
  
  const publication = await publicationListService()
  
  return res.status(200).json(publication)
  }

export const listOnePublicationController = async (req: Request,res: Response) => {
    
  const {id} = req.params
  const publication = await publicationListOneService(id)
    
    return res.status(200).json(publication)
    }  


export const updatePublicationController = async (req: Request,res: Response) => {
    
  const data = req.inputData
  const {id} = req.params
  
  const publication = await publicationUpdateService(id,data)
  
    return res.status(200).json(publication)
  }  

export const deletePublicationController = async (req: Request,res: Response) => {
    
    const {id} = req.params
    console.log(id,"idconso")
    const publication = await publicationDeleteService(id)
    
    return res.status(204).json(publication)
    }    
  