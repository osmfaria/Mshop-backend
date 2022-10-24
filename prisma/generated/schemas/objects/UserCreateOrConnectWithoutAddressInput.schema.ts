// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserCreateWithoutAddressInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutAddressInputObjectSchema } from '../internals';

export const UserCreateOrConnectWithoutAddressInputObjectSchema = Yup.object({
    where: UserWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([UserCreateWithoutAddressInputObjectSchema,
UserUncheckedCreateWithoutAddressInputObjectSchema])
});
