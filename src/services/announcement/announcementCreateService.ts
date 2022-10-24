import {IAnnouncement} from "../../interfaces/announcementInterface"
import { prismaClient } from '../../database/prismaClient'
import { AppError } from "../../../errors/appError"
import { Publication } from "@prisma/client"


const createAnnoucementService = async (user_id:string,data:IAnnouncement): Promise<Publication> => {
    const user = prismaClient.user.findUnique({
        where:{
            id:user_id
        }
    })

    if (!user) {
        throw new AppError('User not found', 404)
      }
    
      const announcement = await prismaClient.publication.create({
        data,
        
     })  
     
     return announcement
   
  }
  
  export default createAnnoucementService
  