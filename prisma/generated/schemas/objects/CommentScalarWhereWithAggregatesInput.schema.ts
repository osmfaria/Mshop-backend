// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringWithAggregatesFilterObjectSchema } from '../internals';;
import { DateTimeWithAggregatesFilterObjectSchema } from '../internals';

export const CommentScalarWhereWithAggregatesInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => CommentScalarWhereWithAggregatesInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => CommentScalarWhereWithAggregatesInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => CommentScalarWhereWithAggregatesInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => CommentScalarWhereWithAggregatesInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => CommentScalarWhereWithAggregatesInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()]),  description: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeWithAggregatesFilterObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeWithAggregatesFilterObjectSchema]),  userId: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()]),  publicationId: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()])
});
