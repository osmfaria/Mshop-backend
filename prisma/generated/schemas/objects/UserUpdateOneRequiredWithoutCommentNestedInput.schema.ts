// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutCommentInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutCommentInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutCommentInputObjectSchema } from '../internals';;
import { UserUpsertWithoutCommentInputObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserUpdateWithoutCommentInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutCommentInputObjectSchema } from '../internals';

export const UserUpdateOneRequiredWithoutCommentNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutCommentInputObjectSchema,
UserUncheckedCreateWithoutCommentInputObjectSchema]),  connectOrCreate: UserCreateOrConnectWithoutCommentInputObjectSchema,  upsert: UserUpsertWithoutCommentInputObjectSchema,  connect: UserWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([UserUpdateWithoutCommentInputObjectSchema,
UserUncheckedUpdateWithoutCommentInputObjectSchema])
});
