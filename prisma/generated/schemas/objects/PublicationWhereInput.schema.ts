// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { FloatFilterObjectSchema } from '../internals';;
import { EnumVehicle_TypeFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { UserRelationFilterObjectSchema } from '../internals';;
import { UserWhereInputObjectSchema } from '../internals';;
import { CommentListRelationFilterObjectSchema } from '../internals';;
import { ImageListRelationFilterObjectSchema } from '../internals';

export const PublicationWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => PublicationWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => PublicationWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => PublicationWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => PublicationWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => PublicationWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  type: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  title: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  year: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  milieage: Yup.mixed().oneOfSchemas([FloatFilterObjectSchema,
Yup.number()]),  price: Yup.mixed().oneOfSchemas([FloatFilterObjectSchema,
Yup.number()]),  description: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  vehicle_type: Yup.mixed().oneOfSchemas([EnumVehicle_TypeFilterObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  user: Yup.mixed().oneOfSchemas([UserRelationFilterObjectSchema,
UserWhereInputObjectSchema]),  userId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  Comment: CommentListRelationFilterObjectSchema,  Image: ImageListRelationFilterObjectSchema
});
