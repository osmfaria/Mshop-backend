import * as Yup from 'yup';
import { PublicationWhereInputObjectSchema, PublicationOrderByWithRelationInputObjectSchema, PublicationWhereUniqueInputObjectSchema } from './internals';
import { PublicationScalarFieldEnumSchema } from './internals'

export const PublicationFindFirstSchema = Yup.object({ where: PublicationWhereInputObjectSchema, orderBy: PublicationOrderByWithRelationInputObjectSchema, cursor: PublicationWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(PublicationScalarFieldEnumSchema) }).required()