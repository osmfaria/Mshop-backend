import * as Yup from 'yup';
import { PublicationUpdateInputObjectSchema, PublicationWhereUniqueInputObjectSchema } from './internals'

export const PublicationUpdateOneSchema = Yup.object({ data: PublicationUpdateInputObjectSchema, where: PublicationWhereUniqueInputObjectSchema  }).required()