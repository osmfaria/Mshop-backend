import { Publication } from "@prisma/client"
import { IImage } from "./imageInterface"

const Vehicle_Type: {
  CAR: 'CAR'
  MOTORCYCLE: 'MOTORCYCLE'
} = {
  CAR: 'CAR',
  MOTORCYCLE: 'MOTORCYCLE',
}

export type Vehicle_Type = typeof Vehicle_Type[keyof typeof Vehicle_Type]

export declare type IPublication = {
  type: string
  title: string
  year: string
  milieage: number
  price: number
  description: string
  is_active?: boolean
  vehicle_type?: Vehicle_Type
  images: IImage[]
}

export declare type IPublicationResponse = {
  pageCount: number
  previousPage: string | null
  nextPage: string | null
  results: Publication[]
}

export declare type IPublicationUpdate = {
  type?: string
  title?: string
  year?: string
  milieage?: number
  price?: number
  description?: string
  is_active?: boolean
  vehicle_type?: Vehicle_Type
  images?: any
}

// Enumerable<ImageUpdateWithWhereUniqueWithoutPublicationInput> | undefined'.