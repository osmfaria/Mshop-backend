// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PublicationWhereInputObjectSchema } from '../internals';

export const PublicationListRelationFilterObjectSchema = Yup.object({
    every: PublicationWhereInputObjectSchema,  some: PublicationWhereInputObjectSchema,  none: PublicationWhereInputObjectSchema
});
