import { Image, Vehicle_Type } from "@prisma/client"

export declare type IPublication = {
  user_id: string
    type: string
    title: string
    year: string
    milieage: number
    price: number
    vehicle_type: Vehicle_Type
    description: string
    link:string
  }
  
  export declare type IPublicationUpdate = {
    id:string
    type?: string
    title?: string
    year?: string
    mileage?: number
    price?: number
    type_vehicle?: string
    description?: string
    image?: string
  }
  
  export declare type IPublicationSchema = {

      type: string
      title: string
      year: string
      milieage: number
      price: number
      // vehicle_type: Vehicle_Type
      description: string
      link:string
    }
  
    export declare type IPublicationSchemaUpdate = {

      type?: string
      title?: string
      year?: string
      milieage?: number
      price?: number
      // vehicle_type: Vehicle_Type
      description?: string
      link?:string
    }