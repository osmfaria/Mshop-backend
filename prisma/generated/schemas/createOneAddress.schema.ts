import * as Yup from 'yup';
import { AddressCreateInputObjectSchema } from './internals'

export const AddressCreateSchema = Yup.object({ data: AddressCreateInputObjectSchema  }).required()