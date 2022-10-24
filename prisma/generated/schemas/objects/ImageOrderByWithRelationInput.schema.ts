// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { SortOrderSchema } from '../internals';;
import { PublicationOrderByWithRelationInputObjectSchema } from '../internals';

export const ImageOrderByWithRelationInputObjectSchema = Yup.object({
    id: SortOrderSchema,  link: SortOrderSchema,  publication: PublicationOrderByWithRelationInputObjectSchema,  publicationId: SortOrderSchema
});
