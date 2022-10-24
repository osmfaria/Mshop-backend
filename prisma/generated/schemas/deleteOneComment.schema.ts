import * as Yup from 'yup';
import { CommentWhereUniqueInputObjectSchema } from './internals'

export const CommentDeleteOneSchema = Yup.object({ where: CommentWhereUniqueInputObjectSchema  }).required()