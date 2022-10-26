// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { FloatFilterObjectSchema } from '../internals';;
import { EnumVehicle_TypeFilterObjectSchema } from '../internals';;
import { BoolFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';

export const PublicationScalarWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => PublicationScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => PublicationScalarWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => PublicationScalarWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => PublicationScalarWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => PublicationScalarWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  type: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  title: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  year: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  milieage: Yup.mixed().oneOfSchemas([FloatFilterObjectSchema,
Yup.number()]),  price: Yup.mixed().oneOfSchemas([FloatFilterObjectSchema,
Yup.number()]),  description: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  vehicle_type: Yup.mixed().oneOfSchemas([EnumVehicle_TypeFilterObjectSchema]),  is_active: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema,
Yup.boolean()]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  userId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()])
});
