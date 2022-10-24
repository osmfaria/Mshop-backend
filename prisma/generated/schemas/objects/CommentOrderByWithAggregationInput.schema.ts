// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { CommentCountOrderByAggregateInputObjectSchema } from '../internals';;
import { CommentMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { CommentMinOrderByAggregateInputObjectSchema } from '../internals';

export const CommentOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  description: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  userId: SortOrderSchema,  publicationId: SortOrderSchema,  _count: CommentCountOrderByAggregateInputObjectSchema,  _max: CommentMaxOrderByAggregateInputObjectSchema,  _min: CommentMinOrderByAggregateInputObjectSchema
});
