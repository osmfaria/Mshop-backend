// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PublicationCreateNestedOneWithoutImageInputObjectSchema } from '../internals';

export const ImageCreateInputObjectSchema = Yup.object({
    id: Yup.string(),  link: Yup.string().required(),  publication: PublicationCreateNestedOneWithoutImageInputObjectSchema
});
