// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';

export const UserCountOrderByAggregateInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  email: SortOrderSchema,  password: SortOrderSchema,  cpf: SortOrderSchema,  phone: SortOrderSchema,  birthdate: SortOrderSchema,  description: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  isAdmin: SortOrderSchema,  account_type: SortOrderSchema
});
