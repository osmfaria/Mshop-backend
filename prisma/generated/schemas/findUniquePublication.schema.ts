import * as Yup from 'yup';
import { PublicationWhereUniqueInputObjectSchema } from './internals'

export const PublicationFindUniqueSchema = Yup.object({ where: PublicationWhereUniqueInputObjectSchema }).required()