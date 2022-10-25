// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFilterObjectSchema } from '../internals';;
import { DateTimeNullableFilterObjectSchema } from '../internals';;
import { StringNullableFilterObjectSchema } from '../internals';;
import { DateTimeFilterObjectSchema } from '../internals';;
import { BoolFilterObjectSchema } from '../internals';;
import { EnumAccount_TypeFilterObjectSchema } from '../internals';;
import { AddressRelationFilterObjectSchema } from '../internals';;
import { AddressWhereInputObjectSchema } from '../internals';;
import { PublicationListRelationFilterObjectSchema } from '../internals';;
import { CommentListRelationFilterObjectSchema } from '../internals';

export const UserWhereInputObjectSchema = Yup.object({
    AND: Yup.mixed().oneOfSchemas([Yup.lazy(() => UserWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => UserWhereInputObjectSchema.default(undefined)))]),  OR: Yup.array().of(Yup.lazy(() => UserWhereInputObjectSchema.default(undefined))),  NOT: Yup.mixed().oneOfSchemas([Yup.lazy(() => UserWhereInputObjectSchema.default(undefined)),
Yup.array().of(Yup.lazy(() => UserWhereInputObjectSchema.default(undefined)))]),  id: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  name: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  email: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  password: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  cpf: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  phone: Yup.mixed().oneOfSchemas([StringFilterObjectSchema,
Yup.string()]),  birthdate: Yup.mixed().oneOfSchemas([DateTimeNullableFilterObjectSchema]),  description: Yup.mixed().oneOfSchemas([StringNullableFilterObjectSchema,
Yup.string()]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFilterObjectSchema]),  isAdmin: Yup.mixed().oneOfSchemas([BoolFilterObjectSchema,
Yup.boolean()]),  account_type: Yup.mixed().oneOfSchemas([EnumAccount_TypeFilterObjectSchema]),  Address: Yup.mixed().oneOfSchemas([AddressRelationFilterObjectSchema,
AddressWhereInputObjectSchema]),  Publication: PublicationListRelationFilterObjectSchema,  Comment: CommentListRelationFilterObjectSchema
});
