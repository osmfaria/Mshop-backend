// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';

export const CommentScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => CommentScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => CommentScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => CommentScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => CommentScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => CommentScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  description: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  userId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  publicationId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()])
});
