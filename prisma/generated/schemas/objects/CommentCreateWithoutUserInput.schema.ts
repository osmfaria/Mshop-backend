// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PublicationCreateNestedOneWithoutCommentInputObjectSchema } from '../internals';

export const CommentCreateWithoutUserInputObjectSchema = Yup.object({
    id: Yup.string(),  description: Yup.string().required(),  createdAt: Yup.date(),  updatedAt: Yup.date(),  publication: PublicationCreateNestedOneWithoutCommentInputObjectSchema
});
