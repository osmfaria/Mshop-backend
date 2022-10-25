import {IPublication} from "../../interfaces/publication"
import { prismaClient } from '../../database/prismaClient'
import { AppError } from "../../../errors/appError"
import { Publication } from "@prisma/client"


const createPublicationService = async ({user_id,type,title,year,milieage,price,description,vehicle_type,link}: IPublication)=> {
  
    const user = await prismaClient.user.findUnique({
        where: {
          id: user_id,
        },
      })

      if (!user) {
        throw new AppError('User not found', 404)
      }

      if(vehicle_type !== "CAR" && vehicle_type !== "MOTORCYCLE"){
        throw new AppError("Incorrect vehicle")
      }
      
      const publication = await prismaClient.publication.create({
        
        data:{
          user:{
            connect:{
              id:user_id
            }
          },
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

      const obj = {
        publication,
        img
        
      }
      return obj
      
    
  }
  
  export default createPublicationService
  