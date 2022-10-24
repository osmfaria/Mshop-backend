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

export declare type IAddress = {
  address: string,
  cep: string,
  state: string,
  city: string,
  number: string,
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

