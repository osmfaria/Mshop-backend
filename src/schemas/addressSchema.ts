import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IAddressUpdate } from '../interfaces/userInterface'

export const addressUpdateSchema: SchemaOf<IAddressUpdate> = yup.object().shape({
  address: yup.string().max(200),
  cep: yup.string().max(20),
  state: yup.string().max(2),
  city: yup.string().min(3).max(50),
  number: yup.string().min(1).max(7),
  complement: yup.string(),
})
