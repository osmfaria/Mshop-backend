import * as Yup from 'yup';
import { AddressWhereUniqueInputObjectSchema } from './internals'

export const AddressFindUniqueSchema = Yup.object({ where: AddressWhereUniqueInputObjectSchema }).required()