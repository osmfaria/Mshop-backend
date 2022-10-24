// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CommentCreateWithoutUserInputObjectSchema } from '../internals';;
import { CommentUncheckedCreateWithoutUserInputObjectSchema } from '../internals';;
import { CommentCreateOrConnectWithoutUserInputObjectSchema } from '../internals';;
import { CommentUpsertWithWhereUniqueWithoutUserInputObjectSchema } from '../internals';;
import { CommentCreateManyUserInputEnvelopeObjectSchema } from '../internals';;
import { CommentWhereUniqueInputObjectSchema } from '../internals';;
import { CommentUpdateWithWhereUniqueWithoutUserInputObjectSchema } from '../internals';;
import { CommentUpdateManyWithWhereWithoutUserInputObjectSchema } from '../internals';;
import { CommentScalarWhereInputObjectSchema } from '../internals';

export const CommentUpdateManyWithoutUserNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([CommentCreateWithoutUserInputObjectSchema,
Yup.array().of(CommentCreateWithoutUserInputObjectSchema),
CommentUncheckedCreateWithoutUserInputObjectSchema,
Yup.array().of(CommentUncheckedCreateWithoutUserInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([CommentCreateOrConnectWithoutUserInputObjectSchema,
Yup.array().of(CommentCreateOrConnectWithoutUserInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([CommentUpsertWithWhereUniqueWithoutUserInputObjectSchema,
Yup.array().of(CommentUpsertWithWhereUniqueWithoutUserInputObjectSchema)]),  createMany: CommentCreateManyUserInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([CommentWhereUniqueInputObjectSchema,
Yup.array().of(CommentWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([CommentWhereUniqueInputObjectSchema,
Yup.array().of(CommentWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([CommentWhereUniqueInputObjectSchema,
Yup.array().of(CommentWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([CommentWhereUniqueInputObjectSchema,
Yup.array().of(CommentWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([CommentUpdateWithWhereUniqueWithoutUserInputObjectSchema,
Yup.array().of(CommentUpdateWithWhereUniqueWithoutUserInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([CommentUpdateManyWithWhereWithoutUserInputObjectSchema,
Yup.array().of(CommentUpdateManyWithWhereWithoutUserInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([CommentScalarWhereInputObjectSchema,
Yup.array().of(CommentScalarWhereInputObjectSchema)])
});
