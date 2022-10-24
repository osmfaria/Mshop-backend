import * as Yup from 'yup';
import { AddressWhereInputObjectSchema, AddressOrderByWithRelationInputObjectSchema, AddressWhereUniqueInputObjectSchema } from './internals';
import { AddressScalarFieldEnumSchema } from './internals'

export const AddressFindManySchema = Yup.object({ where: AddressWhereInputObjectSchema, orderBy: AddressOrderByWithRelationInputObjectSchema, cursor: AddressWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(AddressScalarFieldEnumSchema)  }).required()