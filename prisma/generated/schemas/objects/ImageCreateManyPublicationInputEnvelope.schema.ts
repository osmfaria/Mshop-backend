// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ImageCreateManyPublicationInputObjectSchema } from '../internals';

export const ImageCreateManyPublicationInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(ImageCreateManyPublicationInputObjectSchema),  skipDuplicates: Yup.boolean()
});
