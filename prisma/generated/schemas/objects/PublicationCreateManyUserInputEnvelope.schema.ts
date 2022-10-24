// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PublicationCreateManyUserInputObjectSchema } from '../internals';

export const PublicationCreateManyUserInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(PublicationCreateManyUserInputObjectSchema),  skipDuplicates: Yup.boolean()
});
