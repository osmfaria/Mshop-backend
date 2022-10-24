// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserCreateWithoutCommentInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutCommentInputObjectSchema } from '../internals';

export const UserCreateOrConnectWithoutCommentInputObjectSchema = Yup.object({
    where: UserWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([UserCreateWithoutCommentInputObjectSchema,
UserUncheckedCreateWithoutCommentInputObjectSchema])
});
