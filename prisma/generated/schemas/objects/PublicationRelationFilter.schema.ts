// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PublicationWhereInputObjectSchema } from '../internals';

export const PublicationRelationFilterObjectSchema = Yup.object({
    is: PublicationWhereInputObjectSchema,  isNot: PublicationWhereInputObjectSchema
});
