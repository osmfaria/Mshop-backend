import * as Yup from 'yup';
import { AddressWhereInputObjectSchema, AddressOrderByWithAggregationInputObjectSchema, AddressScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { AddressScalarFieldEnumSchema } from './internals'

export const AddressGroupBySchema = Yup.object({ where: AddressWhereInputObjectSchema, orderBy: AddressOrderByWithAggregationInputObjectSchema, having: AddressScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(AddressScalarFieldEnumSchema).required()  }).required()