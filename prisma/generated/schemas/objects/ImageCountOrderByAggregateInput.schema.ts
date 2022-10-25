// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const ImageCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  link: SortOrderSchema,  publicationId: SortOrderSchema
});