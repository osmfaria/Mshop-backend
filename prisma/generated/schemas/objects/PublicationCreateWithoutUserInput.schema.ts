// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CommentCreateNestedManyWithoutPublicationInputObjectSchema } from '../internals';;
import { ImageCreateNestedManyWithoutPublicationInputObjectSchema } from '../internals';

export const PublicationCreateWithoutUserInputObjectSchema = Yup.object({
    id: Yup.string(),  type: Yup.string().required(),  title: Yup.string().required(),  year: Yup.string().required(),  milieage: Yup.number().required(),  price: Yup.number().required(),  description: Yup.string().required(),  is_active: Yup.boolean(),  createdAt: Yup.date(),  updatedAt: Yup.date(),  Comment: CommentCreateNestedManyWithoutPublicationInputObjectSchema,  Image: ImageCreateNestedManyWithoutPublicationInputObjectSchema
});
