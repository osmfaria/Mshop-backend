// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const CommentCreateManyPublicationInputObjectSchema = Yup.object({
    id: Yup.string(),  description: Yup.string().required(),  createdAt: Yup.date(),  updatedAt: Yup.date(),  userId: Yup.string().required()
});
