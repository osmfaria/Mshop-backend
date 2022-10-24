// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const CommentUncheckedCreateWithoutUserInputObjectSchema = Yup.object({
    id: Yup.string(),  description: Yup.string().required(),  createdAt: Yup.date(),  updatedAt: Yup.date(),  publicationId: Yup.string().required()
});
