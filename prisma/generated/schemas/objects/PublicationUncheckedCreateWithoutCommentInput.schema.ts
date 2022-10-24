// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ImageUncheckedCreateNestedManyWithoutPublicationInputObjectSchema } from '../internals';

export const PublicationUncheckedCreateWithoutCommentInputObjectSchema = Yup.object({
    id: Yup.string(),  type: Yup.string().required(),  title: Yup.string().required(),  year: Yup.string().required(),  milieage: Yup.number().required(),  price: Yup.number().required(),  description: Yup.string().required(),  createdAt: Yup.date(),  updatedAt: Yup.date(),  userId: Yup.string().required(),  Image: ImageUncheckedCreateNestedManyWithoutPublicationInputObjectSchema
});
