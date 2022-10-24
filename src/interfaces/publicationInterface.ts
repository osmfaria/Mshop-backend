const Vehicle_Type: {
  CAR: 'CAR'
  MOTORCYCLE: 'MOTORCYCLE'
} = {
  CAR: 'CAR',
  MOTORCYCLE: 'MOTORCYCLE'
}

type Vehicle_Type = typeof Vehicle_Type[keyof typeof Vehicle_Type]

export declare type IPublication = {
  type: string
  title: string
  year: string
  milieage: number
  price: number
  description: string
  vehicle_type?: Vehicle_Type
}

