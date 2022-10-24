// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';

export const ImageScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => ImageScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ImageScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => ImageScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => ImageScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ImageScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  link: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  publicationId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()])
});
