import * as Yup from 'yup';
import { PublicationCreateInputObjectSchema } from './internals'

export const PublicationCreateSchema = Yup.object({ data: PublicationCreateInputObjectSchema  }).required()