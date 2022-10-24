// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { UserCreateWithoutPublicationInputObjectSchema } from '../internals';;
import { UserUncheckedCreateWithoutPublicationInputObjectSchema } from '../internals';;
import { UserCreateOrConnectWithoutPublicationInputObjectSchema } from '../internals';;
import { UserWhereUniqueInputObjectSchema } from '../internals';

export const UserCreateNestedOneWithoutPublicationInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([UserCreateWithoutPublicationInputObjectSchema,
UserUncheckedCreateWithoutPublicationInputObjectSchema]),  connectOrCreate: UserCreateOrConnectWithoutPublicationInputObjectSchema,  connect: UserWhereUniqueInputObjectSchema
});
