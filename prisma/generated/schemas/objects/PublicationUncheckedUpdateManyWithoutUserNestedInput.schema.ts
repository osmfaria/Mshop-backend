// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PublicationCreateWithoutUserInputObjectSchema } from '../internals';;
import { PublicationUncheckedCreateWithoutUserInputObjectSchema } from '../internals';;
import { PublicationCreateOrConnectWithoutUserInputObjectSchema } from '../internals';;
import { PublicationUpsertWithWhereUniqueWithoutUserInputObjectSchema } from '../internals';;
import { PublicationCreateManyUserInputEnvelopeObjectSchema } from '../internals';;
import { PublicationWhereUniqueInputObjectSchema } from '../internals';;
import { PublicationUpdateWithWhereUniqueWithoutUserInputObjectSchema } from '../internals';;
import { PublicationUpdateManyWithWhereWithoutUserInputObjectSchema } from '../internals';;
import { PublicationScalarWhereInputObjectSchema } from '../internals';

export const PublicationUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PublicationCreateWithoutUserInputObjectSchema,
Yup.array().of(PublicationCreateWithoutUserInputObjectSchema),
PublicationUncheckedCreateWithoutUserInputObjectSchema,
Yup.array().of(PublicationUncheckedCreateWithoutUserInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([PublicationCreateOrConnectWithoutUserInputObjectSchema,
Yup.array().of(PublicationCreateOrConnectWithoutUserInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([PublicationUpsertWithWhereUniqueWithoutUserInputObjectSchema,
Yup.array().of(PublicationUpsertWithWhereUniqueWithoutUserInputObjectSchema)]),  createMany: PublicationCreateManyUserInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([PublicationWhereUniqueInputObjectSchema,
Yup.array().of(PublicationWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([PublicationWhereUniqueInputObjectSchema,
Yup.array().of(PublicationWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([PublicationWhereUniqueInputObjectSchema,
Yup.array().of(PublicationWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([PublicationWhereUniqueInputObjectSchema,
Yup.array().of(PublicationWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([PublicationUpdateWithWhereUniqueWithoutUserInputObjectSchema,
Yup.array().of(PublicationUpdateWithWhereUniqueWithoutUserInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([PublicationUpdateManyWithWhereWithoutUserInputObjectSchema,
Yup.array().of(PublicationUpdateManyWithWhereWithoutUserInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([PublicationScalarWhereInputObjectSchema,
Yup.array().of(PublicationScalarWhereInputObjectSchema)])
});
