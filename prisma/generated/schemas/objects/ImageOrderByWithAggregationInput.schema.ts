// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { ImageCountOrderByAggregateInputObjectSchema } from '../internals';;
import { ImageMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { ImageMinOrderByAggregateInputObjectSchema } from '../internals';

export const ImageOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  link: SortOrderSchema,  publicationId: SortOrderSchema,  _count: ImageCountOrderByAggregateInputObjectSchema,  _max: ImageMaxOrderByAggregateInputObjectSchema,  _min: ImageMinOrderByAggregateInputObjectSchema
});
