import * as Yup from 'yup';
import { PublicationUpdateManyMutationInputObjectSchema, PublicationWhereInputObjectSchema } from './internals'

export const PublicationUpdateManySchema = Yup.object({ data: PublicationUpdateManyMutationInputObjectSchema, where: PublicationWhereInputObjectSchema  }).required()