import * as Yup from 'yup';
import { AddressWhereUniqueInputObjectSchema } from './internals'

export const AddressDeleteOneSchema = Yup.object({ where: AddressWhereUniqueInputObjectSchema  }).required()