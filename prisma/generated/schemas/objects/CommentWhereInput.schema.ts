// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { UserRelationFilterObjectSchema } from '../internals';;
import { UserWhereInputObjectSchema } from '../internals';;
import { PublicationRelationFilterObjectSchema } from '../internals';;
import { PublicationWhereInputObjectSchema } from '../internals';

export const CommentWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => CommentWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => CommentWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => CommentWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => CommentWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => CommentWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  description: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  user: Yup.mixed().oneOfSchemas([UserRelationFilterObjectSchema,
UserWhereInputObjectSchema]),  userId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  publication: Yup.mixed().oneOfSchemas([PublicationRelationFilterObjectSchema,
PublicationWhereInputObjectSchema]),  publicationId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()])
});
