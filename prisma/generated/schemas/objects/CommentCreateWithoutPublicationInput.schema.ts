// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateNestedOneWithoutCommentInputObjectSchema } from '../internals';

export const CommentCreateWithoutPublicationInputObjectSchema = Yup.object({
    id: Yup.string(),  description: Yup.string().required(),  createdAt: Yup.date(),  updatedAt: Yup.date(),  user: UserCreateNestedOneWithoutCommentInputObjectSchema
});
