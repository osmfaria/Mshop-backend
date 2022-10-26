// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const PublicationCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  type: SortOrderSchema,  title: SortOrderSchema,  year: SortOrderSchema,  milieage: SortOrderSchema,  price: SortOrderSchema,  description: SortOrderSchema,  vehicle_type: SortOrderSchema,  is_active: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  userId: SortOrderSchema
});
