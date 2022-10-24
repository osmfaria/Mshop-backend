// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserUpdateWithoutPublicationInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutPublicationInputObjectSchema } from '../internals';;
import { UserCreateWithoutPublicationInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutPublicationInputObjectSchema } from '../internals';

export const UserUpsertWithoutPublicationInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([UserUpdateWithoutPublicationInputObjectSchema,
UserUncheckedUpdateWithoutPublicationInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([UserCreateWithoutPublicationInputObjectSchema,
UserUncheckedCreateWithoutPublicationInputObjectSchema])
});
