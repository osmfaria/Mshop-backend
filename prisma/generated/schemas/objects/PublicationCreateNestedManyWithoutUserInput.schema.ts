// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PublicationCreateWithoutUserInputObjectSchema } from '../internals';;
import { PublicationUncheckedCreateWithoutUserInputObjectSchema } from '../internals';;
import { PublicationCreateOrConnectWithoutUserInputObjectSchema } from '../internals';;
import { PublicationCreateManyUserInputEnvelopeObjectSchema } from '../internals';;
import { PublicationWhereUniqueInputObjectSchema } from '../internals';

export const PublicationCreateNestedManyWithoutUserInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PublicationCreateWithoutUserInputObjectSchema,
Yup.array().of(PublicationCreateWithoutUserInputObjectSchema),
PublicationUncheckedCreateWithoutUserInputObjectSchema,
Yup.array().of(PublicationUncheckedCreateWithoutUserInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([PublicationCreateOrConnectWithoutUserInputObjectSchema,
Yup.array().of(PublicationCreateOrConnectWithoutUserInputObjectSchema)]),  createMany: PublicationCreateManyUserInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([PublicationWhereUniqueInputObjectSchema,
Yup.array().of(PublicationWhereUniqueInputObjectSchema)])
});
