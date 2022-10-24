// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { UserOrderByWithRelationInputObjectSchema } from '../internals';;
import { PublicationOrderByWithRelationInputObjectSchema } from '../internals';

export const CommentOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  description: SortOrderSchema,  createdAt: SortOrderSchema,  updatedAt: SortOrderSchema,  user: UserOrderByWithRelationInputObjectSchema,  userId: SortOrderSchema,  publication: PublicationOrderByWithRelationInputObjectSchema,  publicationId: SortOrderSchema
});
