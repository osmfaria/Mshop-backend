import { User } from "@prisma/client"

const Account_Type: {
  BUYER: 'BUYER'
  SELLER: 'SELLER'
} = {
  BUYER: 'BUYER',
  SELLER: 'SELLER',
}

type Account_Type = typeof Account_Type[keyof typeof Account_Type]

export declare type IUser = {
  name: string
  email: string
  password: string
  cpf: string
  phone: string
  birthdate?: Date
  description?: string
  isAdmin?: boolean
  address: IAddress
  account_type?: Account_Type 
}

export declare type IUserUpdate = {
  name?: string
  email?: string
  password?: string
  cpf?: string
  phone?: string
  birthdate?: Date
  description?: string
}

export declare type IUserResponse = {
  pageCount: number
  previousPage: string | null
  nextPage: string | null
  results: Omit<User[], 'password'>
}

export declare type IAddress = {
  address: string
  cep: string
  state: string
  city: string
  number: string
  complement?: string
}

export declare type IAddressUpdate = {
  address?: string
  cep?: string
  state?: string
  city?: string
  number?: string
  complement?: string
}

