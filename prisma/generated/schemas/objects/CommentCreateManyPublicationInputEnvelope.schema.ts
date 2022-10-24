// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CommentCreateManyPublicationInputObjectSchema } from '../internals';

export const CommentCreateManyPublicationInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(CommentCreateManyPublicationInputObjectSchema),  skipDuplicates: Yup.boolean()
});
