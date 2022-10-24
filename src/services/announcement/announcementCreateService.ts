import {IAnnouncement} from "../../interfaces/announcementInterface"
import { prismaClient } from '../../database/prismaClient'
import { AppError } from "../../../errors/appError"
import { Publication } from "@prisma/client"


const createAnnoucementService = async ({userId,type,title,year,milieage,price,description,vehicle_type,link}: IAnnouncement)=> {
  
    const user = await prismaClient.user.findUnique({
        where: {
          id: userId,
        },
      })

      if (!user) {
        throw new AppError('User not found', 404)
      }
      console.log("dsakjasfjdskalfhdjs")
      const publication = await prismaClient.publication.create({
        
        data:{
          userId,
          type,
          title,
          year,
          milieage,
          price,
          description,
          vehicle_type,
        }
        
        
      })
      
      const img = await prismaClient.image.create({
        data:{
            link,
            publicationId:publication.id
        }
      })

      return publication
    
  }
  
  export default createAnnoucementService
  