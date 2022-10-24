import * as Yup from 'yup';
import { PublicationWhereInputObjectSchema, PublicationOrderByWithRelationInputObjectSchema, PublicationWhereUniqueInputObjectSchema } from './internals'

export const PublicationAggregateSchema = Yup.object({ where: PublicationWhereInputObjectSchema, orderBy: PublicationOrderByWithRelationInputObjectSchema, cursor: PublicationWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()