// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const ImageUncheckedCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  link: Yup.string().required(),  publicationId: Yup.string().required()
});
