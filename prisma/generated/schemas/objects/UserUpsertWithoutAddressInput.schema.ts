// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserUpdateWithoutAddressInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutAddressInputObjectSchema } from '../internals';;
import { UserCreateWithoutAddressInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutAddressInputObjectSchema } from '../internals';

export const UserUpsertWithoutAddressInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([UserUpdateWithoutAddressInputObjectSchema,
UserUncheckedUpdateWithoutAddressInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([UserCreateWithoutAddressInputObjectSchema,
UserUncheckedCreateWithoutAddressInputObjectSchema])
});
