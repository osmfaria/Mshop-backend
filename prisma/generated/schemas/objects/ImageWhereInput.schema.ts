// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { PublicationRelationFilterObjectSchema } from '../internals';;
import { PublicationWhereInputObjectSchema } from '../internals';

export const ImageWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => ImageWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ImageWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => ImageWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => ImageWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => ImageWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  link: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  publication: Yup.mixed().oneOfSchemas([PublicationRelationFilterObjectSchema,
PublicationWhereInputObjectSchema]),  publicationId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()])
});
