import { Request, Response } from 'express'
import createAnnoucementService from '../services/announcement/announcementCreateService'
import announcementListService from '../services/announcement/announcementListService'
import announcementUpdateService from '../services/announcement/annoucementUpdateService'
import announcementDeleteService from '../services/announcement/annoucementDeleteService'
import announcementListOneService from '../services/announcement/announcementListOneService'


export const createAnnoucementController = async (req: Request,res: Response) => {
  
  const {userId} = req.params
  const {type,title,year,milieage,price,description,vehicle_type,link} = req.body

 
  const announcement = await createAnnoucementService({userId,type,title,year,milieage,price,description,vehicle_type,link})
  
    return res.status(201).json(announcement)
  }


export const listAnnoucementController = async (req: Request,res: Response) => {
    
  
  const announcement = await announcementListService()
  
  return res.status(200).json(announcement)
  }

export const listOneAnnoucementController = async (req: Request,res: Response) => {
    
  const id = req.params.user_id
  const announcement = await announcementListOneService(id)
    
    return res.status(200).json(announcement)
    }  


export const updateAnnoucementController = async (req: Request,res: Response) => {
    
  const data = req.inputData
  const id = req.params.user_id
  
  const announcement = await announcementUpdateService(id,data)
  
    return res.status(200).json(announcement)
  }  

export const deleteAnnoucementController = async (req: Request,res: Response) => {
    
    const id = req.params.user_id
    
    const announcement = await announcementDeleteService(id)
    
      return res.status(204).json(announcement)
    }    
  