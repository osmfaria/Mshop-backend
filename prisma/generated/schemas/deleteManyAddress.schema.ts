import * as Yup from 'yup';
import { AddressWhereInputObjectSchema } from './internals'

export const AddressDeleteManySchema = Yup.object({ AddressWhereInputObjectSchema  }).required()