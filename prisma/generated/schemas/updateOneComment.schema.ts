import * as Yup from 'yup';
import { CommentUpdateInputObjectSchema, CommentWhereUniqueInputObjectSchema } from './internals'

export const CommentUpdateOneSchema = Yup.object({ data: CommentUpdateInputObjectSchema, where: CommentWhereUniqueInputObjectSchema  }).required()