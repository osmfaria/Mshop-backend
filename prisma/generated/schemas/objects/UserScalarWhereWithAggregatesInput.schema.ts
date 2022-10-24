// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringWithAggregatesFilterObjectSchema } from '../internals';;
import { DateTimeNullableWithAggregatesFilterObjectSchema } from '../internals';;
import { StringNullableWithAggregatesFilterObjectSchema } from '../internals';;
import { DateTimeWithAggregatesFilterObjectSchema } from '../internals';

export const UserScalarWhereWithAggregatesInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => UserScalarWhereWithAggregatesInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()]),  name: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()]),  email: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()]),  password: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()]),  cpf: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()]),  phone: Yup.mixed().oneOfSchemas([StringWithAggregatesFilterObjectSchema,
Yup.string()]),  birthdate: Yup.mixed().oneOfSchemas([DateTimeNullableWithAggregatesFilterObjectSchema]),  description: Yup.mixed().oneOfSchemas([StringNullableWithAggregatesFilterObjectSchema,
Yup.string()]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeWithAggregatesFilterObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeWithAggregatesFilterObjectSchema])
});
