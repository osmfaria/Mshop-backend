// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ImageWhereInputObjectSchema } from '../internals';

export const ImageListRelationFilterObjectSchema = Yup.object({
    every: ImageWhereInputObjectSchema,  some: ImageWhereInputObjectSchema,  none: ImageWhereInputObjectSchema
});
