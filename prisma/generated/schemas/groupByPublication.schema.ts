import * as Yup from 'yup';
import { PublicationWhereInputObjectSchema, PublicationOrderByWithAggregationInputObjectSchema, PublicationScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { PublicationScalarFieldEnumSchema } from './internals'

export const PublicationGroupBySchema = Yup.object({ where: PublicationWhereInputObjectSchema, orderBy: PublicationOrderByWithAggregationInputObjectSchema, having: PublicationScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(PublicationScalarFieldEnumSchema).required()  }).required()