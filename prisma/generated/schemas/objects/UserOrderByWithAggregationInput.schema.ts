// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { UserCountOrderByAggregateInputObjectSchema } from '../internals';;
import { UserMaxOrderByAggregateInputObjectSchema } from '../internals';;
import { UserMinOrderByAggregateInputObjectSchema } from '../internals';

export const UserOrderByWithAggregationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  email: SortOrderSchema,  password: SortOrderSchema,  cpf: SortOrderSchema,  phone: SortOrderSchema,  birthdate: SortOrderSchema,  description: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  _count: UserCountOrderByAggregateInputObjectSchema,  _max: UserMaxOrderByAggregateInputObjectSchema,  _min: UserMinOrderByAggregateInputObjectSchema
});
