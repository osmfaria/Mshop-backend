// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const ImageCreateWithoutPublicationInputObjectSchema = Yup.object({
    id: Yup.string(),  link: Yup.string().required()
});
