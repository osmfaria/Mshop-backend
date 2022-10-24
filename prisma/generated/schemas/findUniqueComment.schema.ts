import * as Yup from 'yup';
import { CommentWhereUniqueInputObjectSchema } from './internals'

export const CommentFindUniqueSchema = Yup.object({ where: CommentWhereUniqueInputObjectSchema }).required()