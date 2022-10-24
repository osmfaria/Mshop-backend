// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { UserRelationFilterObjectSchema } from '../internals';;
import { UserWhereInputObjectSchema } from '../internals';

export const AddressWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => AddressWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => AddressWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => AddressWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => AddressWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => AddressWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  address: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  cep: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  state: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  city: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  number: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  complement: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  user: Yup.mixed().oneOfSchemas([UserRelationFilterObjectSchema,
UserWhereInputObjectSchema]),  userId: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()])
});
