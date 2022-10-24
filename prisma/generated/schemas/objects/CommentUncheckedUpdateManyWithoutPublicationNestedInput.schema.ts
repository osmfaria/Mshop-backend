// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CommentCreateWithoutPublicationInputObjectSchema } from '../internals';;
import { CommentUncheckedCreateWithoutPublicationInputObjectSchema } from '../internals';;
import { CommentCreateOrConnectWithoutPublicationInputObjectSchema } from '../internals';;
import { CommentUpsertWithWhereUniqueWithoutPublicationInputObjectSchema } from '../internals';;
import { CommentCreateManyPublicationInputEnvelopeObjectSchema } from '../internals';;
import { CommentWhereUniqueInputObjectSchema } from '../internals';;
import { CommentUpdateWithWhereUniqueWithoutPublicationInputObjectSchema } from '../internals';;
import { CommentUpdateManyWithWhereWithoutPublicationInputObjectSchema } from '../internals';;
import { CommentScalarWhereInputObjectSchema } from '../internals';

export const CommentUncheckedUpdateManyWithoutPublicationNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([CommentCreateWithoutPublicationInputObjectSchema,
Yup.array().of(CommentCreateWithoutPublicationInputObjectSchema),
CommentUncheckedCreateWithoutPublicationInputObjectSchema,
Yup.array().of(CommentUncheckedCreateWithoutPublicationInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([CommentCreateOrConnectWithoutPublicationInputObjectSchema,
Yup.array().of(CommentCreateOrConnectWithoutPublicationInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([CommentUpsertWithWhereUniqueWithoutPublicationInputObjectSchema,
Yup.array().of(CommentUpsertWithWhereUniqueWithoutPublicationInputObjectSchema)]),  createMany: CommentCreateManyPublicationInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([CommentWhereUniqueInputObjectSchema,
Yup.array().of(CommentWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([CommentWhereUniqueInputObjectSchema,
Yup.array().of(CommentWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([CommentWhereUniqueInputObjectSchema,
Yup.array().of(CommentWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([CommentWhereUniqueInputObjectSchema,
Yup.array().of(CommentWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([CommentUpdateWithWhereUniqueWithoutPublicationInputObjectSchema,
Yup.array().of(CommentUpdateWithWhereUniqueWithoutPublicationInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([CommentUpdateManyWithWhereWithoutPublicationInputObjectSchema,
Yup.array().of(CommentUpdateManyWithWhereWithoutPublicationInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([CommentScalarWhereInputObjectSchema,
Yup.array().of(CommentScalarWhereInputObjectSchema)])
});
