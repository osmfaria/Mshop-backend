import * as Yup from 'yup';
import { CommentWhereUniqueInputObjectSchema, CommentCreateInputObjectSchema, CommentUpdateInputObjectSchema } from './internals'

export const CommentUpsertSchema = Yup.object({ where: CommentWhereUniqueInputObjectSchema, data: CommentCreateInputObjectSchema, update: CommentUpdateInputObjectSchema  }).required()