// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { PublicationCountOrderByAggregateInputObjectSchema } from '../internals';;
import { PublicationAvgOrderByAggregateInputObjectSchema } from '../internals';;
import { PublicationMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { PublicationMinOrderByAggregateInputObjectSchema } from '../internals';;
import { PublicationSumOrderByAggregateInputObjectSchema } from '../internals';

export const PublicationOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  type: SortOrderSchema,  title: SortOrderSchema,  year: SortOrderSchema,  milieage: SortOrderSchema,  price: SortOrderSchema,  description: SortOrderSchema,  vehicle_type: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  userId: SortOrderSchema,  _count: PublicationCountOrderByAggregateInputObjectSchema,  _avg: PublicationAvgOrderByAggregateInputObjectSchema,  _max: PublicationMaxOrderByAggregateInputObjectSchema,  _min: PublicationMinOrderByAggregateInputObjectSchema,  _sum: PublicationSumOrderByAggregateInputObjectSchema
});
