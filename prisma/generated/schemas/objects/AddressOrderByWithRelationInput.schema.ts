// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { UserOrderByWithRelationInputObjectSchema } from '../internals';

export const AddressOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  address: SortOrderSchema,  cep: SortOrderSchema,  state: SortOrderSchema,  city: SortOrderSchema,  number: SortOrderSchema,  complement: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  user: UserOrderByWithRelationInputObjectSchema,  userId: SortOrderSchema
});
