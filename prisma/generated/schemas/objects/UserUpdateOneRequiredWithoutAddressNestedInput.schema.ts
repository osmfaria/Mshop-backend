// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutAddressInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutAddressInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutAddressInputObjectSchema } from '../internals';;
import { UserUpsertWithoutAddressInputObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserUpdateWithoutAddressInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutAddressInputObjectSchema } from '../internals';

export const UserUpdateOneRequiredWithoutAddressNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutAddressInputObjectSchema,
UserUncheckedCreateWithoutAddressInputObjectSchema]),  connectOrCreate: UserCreateOrConnectWithoutAddressInputObjectSchema,  upsert: UserUpsertWithoutAddressInputObjectSchema,  connect: UserWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([UserUpdateWithoutAddressInputObjectSchema,
UserUncheckedUpdateWithoutAddressInputObjectSchema])
});
