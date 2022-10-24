// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CommentCreateWithoutUserInputObjectSchema } from '../internals';;
import { CommentUncheckedCreateWithoutUserInputObjectSchema } from '../internals';;
import { CommentCreateOrConnectWithoutUserInputObjectSchema } from '../internals';;
import { CommentCreateManyUserInputEnvelopeObjectSchema } from '../internals';;
import { CommentWhereUniqueInputObjectSchema } from '../internals';

export const CommentCreateNestedManyWithoutUserInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([CommentCreateWithoutUserInputObjectSchema,
Yup.array().of(CommentCreateWithoutUserInputObjectSchema),
CommentUncheckedCreateWithoutUserInputObjectSchema,
Yup.array().of(CommentUncheckedCreateWithoutUserInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([CommentCreateOrConnectWithoutUserInputObjectSchema,
Yup.array().of(CommentCreateOrConnectWithoutUserInputObjectSchema)]),  createMany: CommentCreateManyUserInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([CommentWhereUniqueInputObjectSchema,
Yup.array().of(CommentWhereUniqueInputObjectSchema)])
});
