// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';

export const ImageUpdateWithoutPublicationInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  link: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema])
});
