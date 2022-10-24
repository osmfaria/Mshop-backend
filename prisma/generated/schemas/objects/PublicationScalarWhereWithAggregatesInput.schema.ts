// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringWithAggregatesFilterObjectSchema } from '../internals';;
import { FloatWithAggregatesFilterObjectSchema } from '../internals';;
import { EnumVehicle_TypeWithAggregatesFilterObjectSchema } from '../internals';;
import { DateTimeWithAggregatesFilterObjectSchema } from '../internals';

export const PublicationScalarWhereWithAggregatesInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => PublicationScalarWhereWithAggregatesInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => PublicationScalarWhereWithAggregatesInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => PublicationScalarWhereWithAggregatesInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => PublicationScalarWhereWithAggregatesInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => PublicationScalarWhereWithAggregatesInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()]),  type: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()]),  title: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()]),  year: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()]),  milieage: Yup.mixed().oneOfSchemas([FloatWithAggregatesFilterObjectSchema,
Yup.number()]),  price: Yup.mixed().oneOfSchemas([FloatWithAggregatesFilterObjectSchema,
Yup.number()]),  description: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()]),  vehicle_type: Yup.mixed().oneOfSchemas([EnumVehicle_TypeWithAggregatesFilterObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeWithAggregatesFilterObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeWithAggregatesFilterObjectSchema]),  userId: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()])
});
