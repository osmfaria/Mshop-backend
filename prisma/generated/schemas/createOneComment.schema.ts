import * as Yup from 'yup';
import { CommentCreateInputObjectSchema } from './internals'

export const CommentCreateSchema = Yup.object({ data: CommentCreateInputObjectSchema  }).required()