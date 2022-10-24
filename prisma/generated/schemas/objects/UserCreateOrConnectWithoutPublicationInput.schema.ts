// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserWhereUniqueInputObjectSchema } from '../internals';;
import { UserCreateWithoutPublicationInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutPublicationInputObjectSchema } from '../internals';

export const UserCreateOrConnectWithoutPublicationInputObjectSchema = Yup.object({
    where: UserWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([UserCreateWithoutPublicationInputObjectSchema,
UserUncheckedCreateWithoutPublicationInputObjectSchema])
});
