import * as Yup from 'yup';
import { AddressUpdateManyMutationInputObjectSchema, AddressWhereInputObjectSchema } from './internals'

export const AddressUpdateManySchema = Yup.object({ data: AddressUpdateManyMutationInputObjectSchema, where: AddressWhereInputObjectSchema  }).required()