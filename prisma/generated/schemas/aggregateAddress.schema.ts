import * as Yup from 'yup';
import { AddressWhereInputObjectSchema, AddressOrderByWithRelationInputObjectSchema, AddressWhereUniqueInputObjectSchema } from './internals'

export const AddressAggregateSchema = Yup.object({ where: AddressWhereInputObjectSchema, orderBy: AddressOrderByWithRelationInputObjectSchema, cursor: AddressWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()