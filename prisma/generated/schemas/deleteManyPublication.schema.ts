import * as Yup from 'yup';
import { PublicationWhereInputObjectSchema } from './internals'

export const PublicationDeleteManySchema = Yup.object({ PublicationWhereInputObjectSchema  }).required()