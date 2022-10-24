import * as Yup from 'yup';
import { PublicationWhereUniqueInputObjectSchema, PublicationCreateInputObjectSchema, PublicationUpdateInputObjectSchema } from './internals'

export const PublicationUpsertSchema = Yup.object({ where: PublicationWhereUniqueInputObjectSchema, data: PublicationCreateInputObjectSchema, update: PublicationUpdateInputObjectSchema  }).required()