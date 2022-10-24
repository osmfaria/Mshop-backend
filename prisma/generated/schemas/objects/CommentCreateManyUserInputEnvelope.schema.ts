// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CommentCreateManyUserInputObjectSchema } from '../internals';

export const CommentCreateManyUserInputEnvelopeObjectSchema = Yup.object({
    data: Yup.array().of(CommentCreateManyUserInputObjectSchema),  skipDuplicates: Yup.boolean()
});
