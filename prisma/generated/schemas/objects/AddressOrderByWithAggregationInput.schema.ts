// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { AddressCountOrderByAggregateInputObjectSchema } from '../internals';;
import { AddressMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { AddressMinOrderByAggregateInputObjectSchema } from '../internals';

export const AddressOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  address: SortOrderSchema,  cep: SortOrderSchema,  state: SortOrderSchema,  city: SortOrderSchema,  number: SortOrderSchema,  complement: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  userId: SortOrderSchema,  _count: AddressCountOrderByAggregateInputObjectSchema,  _max: AddressMaxOrderByAggregateInputObjectSchema,  _min: AddressMinOrderByAggregateInputObjectSchema
});
