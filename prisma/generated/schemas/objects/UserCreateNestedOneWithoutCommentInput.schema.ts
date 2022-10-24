// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutCommentInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutCommentInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutCommentInputObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';

export const UserCreateNestedOneWithoutCommentInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutCommentInputObjectSchema,
UserUncheckedCreateWithoutCommentInputObjectSchema]),  connectOrCreate: UserCreateOrConnectWithoutCommentInputObjectSchema,  connect: UserWhereUniqueInputObjectSchema
});
