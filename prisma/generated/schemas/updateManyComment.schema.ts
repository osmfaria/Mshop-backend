import * as Yup from 'yup';
import { CommentUpdateManyMutationInputObjectSchema, CommentWhereInputObjectSchema } from './internals'

export const CommentUpdateManySchema = Yup.object({ data: CommentUpdateManyMutationInputObjectSchema, where: CommentWhereInputObjectSchema  }).required()