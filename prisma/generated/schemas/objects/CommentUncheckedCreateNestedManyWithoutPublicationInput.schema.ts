// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CommentCreateWithoutPublicationInputObjectSchema } from '../internals';;
import { CommentUncheckedCreateWithoutPublicationInputObjectSchema } from '../internals';;
import { CommentCreateOrConnectWithoutPublicationInputObjectSchema } from '../internals';;
import { CommentCreateManyPublicationInputEnvelopeObjectSchema } from '../internals';;
import { CommentWhereUniqueInputObjectSchema } from '../internals';

export const CommentUncheckedCreateNestedManyWithoutPublicationInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([CommentCreateWithoutPublicationInputObjectSchema,
Yup.array().of(CommentCreateWithoutPublicationInputObjectSchema),
CommentUncheckedCreateWithoutPublicationInputObjectSchema,
Yup.array().of(CommentUncheckedCreateWithoutPublicationInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([CommentCreateOrConnectWithoutPublicationInputObjectSchema,
Yup.array().of(CommentCreateOrConnectWithoutPublicationInputObjectSchema)]),  createMany: CommentCreateManyPublicationInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([CommentWhereUniqueInputObjectSchema,
Yup.array().of(CommentWhereUniqueInputObjectSchema)])
});
