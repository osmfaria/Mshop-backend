// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringWithAggregatesFilterObjectSchema } from '../internals';;
import { StringNullableWithAggregatesFilterObjectSchema } from '../internals';;
import { DateTimeWithAggregatesFilterObjectSchema } from '../internals';

export const AddressScalarWhereWithAggregatesInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => AddressScalarWhereWithAggregatesInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => AddressScalarWhereWithAggregatesInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => AddressScalarWhereWithAggregatesInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => AddressScalarWhereWithAggregatesInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => AddressScalarWhereWithAggregatesInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()]),  address: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()]),  cep: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()]),  state: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()]),  city: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()]),  number: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()]),  complement: Yup.mixed().oneOfSchemas([StringNullableWithAggregatesFilterObjectSchema,
Yup.string()]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeWithAggregatesFilterObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeWithAggregatesFilterObjectSchema]),  userId: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()])
});
