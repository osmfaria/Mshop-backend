// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutPublicationInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutPublicationInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutPublicationInputObjectSchema } from '../internals';;
import { UserUpsertWithoutPublicationInputObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserUpdateWithoutPublicationInputObjectSchema } from '../internals';;
import { UserUncheckedUpdateWithoutPublicationInputObjectSchema } from '../internals';

export const UserUpdateOneRequiredWithoutPublicationNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutPublicationInputObjectSchema,
UserUncheckedCreateWithoutPublicationInputObjectSchema]),  connectOrCreate: UserCreateOrConnectWithoutPublicationInputObjectSchema,  upsert: UserUpsertWithoutPublicationInputObjectSchema,  connect: UserWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([UserUpdateWithoutPublicationInputObjectSchema,
UserUncheckedUpdateWithoutPublicationInputObjectSchema])
});
