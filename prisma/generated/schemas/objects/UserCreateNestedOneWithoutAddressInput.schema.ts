// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutAddressInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutAddressInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutAddressInputObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';

export const UserCreateNestedOneWithoutAddressInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutAddressInputObjectSchema,
UserUncheckedCreateWithoutAddressInputObjectSchema]),  connectOrCreate: UserCreateOrConnectWithoutAddressInputObjectSchema,  connect: UserWhereUniqueInputObjectSchema
});
