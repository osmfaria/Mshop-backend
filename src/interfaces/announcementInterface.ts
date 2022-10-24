import { Image, Vehicle_Type } from "@prisma/client"

export declare type IAnnouncement = {
  userId: string
    type: string
    title: string
    year: string
    milieage: number
    price: number
    vehicle_type: Vehicle_Type
    description: string
    link:string
  }
  
  export declare type IAnnouncementUpdate = {
    id:string
    type?: string
    title?: string
    year?: string
    mileage?: string
    price?: number
    type_vehicle?: string
    description?: string
    image?: string
  }
  
  
  
  