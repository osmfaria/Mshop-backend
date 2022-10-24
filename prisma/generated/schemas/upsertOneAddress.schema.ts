import * as Yup from 'yup';
import { AddressWhereUniqueInputObjectSchema, AddressCreateInputObjectSchema, AddressUpdateInputObjectSchema } from './internals'

export const AddressUpsertSchema = Yup.object({ where: AddressWhereUniqueInputObjectSchema, data: AddressCreateInputObjectSchema, update: AddressUpdateInputObjectSchema  }).required()