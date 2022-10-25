// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { AddressOrderByWithRelationInputObjectSchema } from '../internals';;
import { PublicationOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { CommentOrderByRelationAggregateInputObjectSchema } from '../internals';

export const UserOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  name: SortOrderSchema,  email: SortOrderSchema,  password: SortOrderSchema,  cpf: SortOrderSchema,  phone: SortOrderSchema,  birthdate: SortOrderSchema,  description: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  isAdmin: SortOrderSchema,  account_type: SortOrderSchema,  Address: AddressOrderByWithRelationInputObjectSchema,  Publication: PublicationOrderByRelationAggregateInputObjectSchema,  Comment: CommentOrderByRelationAggregateInputObjectSchema
});
