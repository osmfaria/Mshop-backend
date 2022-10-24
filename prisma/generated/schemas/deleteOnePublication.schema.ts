import * as Yup from 'yup';
import { PublicationWhereUniqueInputObjectSchema } from './internals'

export const PublicationDeleteOneSchema = Yup.object({ where: PublicationWhereUniqueInputObjectSchema  }).required()