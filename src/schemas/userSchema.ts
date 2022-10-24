import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IUser, IUserUpdate } from '../interfaces/userInterface'

export const userCreateSchema: SchemaOf<IUser> = yup.object().shape({
  name: yup.string().required().min(2).max(50),
  email: yup
    .string()
    .email()
    .required()
    .max(50),
  password: yup.string().required().min(4).max(60),
  cpf: yup.string().required().max(15),
  phone: yup.string().required().max(15),
  birthdate: yup.date(),
  description: yup.string().max(200),
  isAdmin: yup.boolean(),
  address: yup.object({
    address: yup.string().required().max(200),
    cep: yup.string().required().max(20),
    state: yup.string().required().max(2),
    city: yup.string().required().min(3).max(50),
    number: yup.string().required().min(1).max(7),
    complement: yup.string()
  })
})

export const userUpdateSchema: SchemaOf<IUserUpdate> = yup.object().shape({
  name: yup.string().min(2).max(50),
  email: yup.string().email().max(50),
  password: yup.string().min(4).max(60),
  cpf: yup.string().max(15),
  phone: yup.string().max(15),
  birthdate: yup.date(),
  description: yup.string().max(200),
})