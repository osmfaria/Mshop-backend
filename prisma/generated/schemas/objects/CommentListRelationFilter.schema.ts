// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CommentWhereInputObjectSchema } from '../internals';

export const CommentListRelationFilterObjectSchema = Yup.object({
    every: CommentWhereInputObjectSchema,  some: CommentWhereInputObjectSchema,  none: CommentWhereInputObjectSchema
});
