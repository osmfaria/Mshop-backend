// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateNestedOneWithoutPublicationInputObjectSchema } from '../internals';;
import { CommentCreateNestedManyWithoutPublicationInputObjectSchema } from '../internals';;
import { ImageCreateNestedManyWithoutPublicationInputObjectSchema } from '../internals';

export const PublicationCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  type: Yup.string().required(),  title: Yup.string().required(),  year: Yup.string().required(),  milieage: Yup.number().required(),  price: Yup.number().required(),  description: Yup.string().required(),  createdAt: Yup.date(),  updatedAt: Yup.date(),  user: UserCreateNestedOneWithoutPublicationInputObjectSchema,  Comment: CommentCreateNestedManyWithoutPublicationInputObjectSchema,  Image: ImageCreateNestedManyWithoutPublicationInputObjectSchema
});
