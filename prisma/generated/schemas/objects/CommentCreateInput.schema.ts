// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateNestedOneWithoutCommentInputObjectSchema } from '../internals';;
import { PublicationCreateNestedOneWithoutCommentInputObjectSchema } from '../internals';

export const CommentCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  description: Yup.string().required(),  createdAt: Yup.date(),  updatedAt: Yup.date(),  user: UserCreateNestedOneWithoutCommentInputObjectSchema,  publication: PublicationCreateNestedOneWithoutCommentInputObjectSchema
});
