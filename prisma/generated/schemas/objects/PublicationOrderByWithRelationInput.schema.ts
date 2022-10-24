// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { UserOrderByWithRelationInputObjectSchema } from '../internals';;
import { CommentOrderByRelationAggregateInputObjectSchema } from '../internals';;
import { ImageOrderByRelationAggregateInputObjectSchema } from '../internals';

export const PublicationOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  type: SortOrderSchema,  title: SortOrderSchema,  year: SortOrderSchema,  milieage: SortOrderSchema,  price: SortOrderSchema,  description: SortOrderSchema,  vehicle_type: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  user: UserOrderByWithRelationInputObjectSchema,  userId: SortOrderSchema,  Comment: CommentOrderByRelationAggregateInputObjectSchema,  Image: ImageOrderByRelationAggregateInputObjectSchema
});
