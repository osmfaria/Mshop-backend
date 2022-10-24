import * as Yup from 'yup';
import { AddressUpdateInputObjectSchema, AddressWhereUniqueInputObjectSchema } from './internals'

export const AddressUpdateOneSchema = Yup.object({ data: AddressUpdateInputObjectSchema, where: AddressWhereUniqueInputObjectSchema  }).required()