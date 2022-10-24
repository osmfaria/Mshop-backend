import * as Yup from 'yup';
import { CommentWhereInputObjectSchema } from './internals'

export const CommentDeleteManySchema = Yup.object({ CommentWhereInputObjectSchema  }).required()