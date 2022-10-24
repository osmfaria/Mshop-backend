// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserUpdateWithoutCommentInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutCommentInputObjectSchema } from '../internals';;
import { UserCreateWithoutCommentInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutCommentInputObjectSchema } from '../internals';

export const UserUpsertWithoutCommentInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([UserUpdateWithoutCommentInputObjectSchema,
UserUncheckedUpdateWithoutCommentInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([UserCreateWithoutCommentInputObjectSchema,
UserUncheckedCreateWithoutCommentInputObjectSchema])
});
