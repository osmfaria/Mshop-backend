// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CommentWhereUniqueInputObjectSchema } from '../internals';;
import { CommentUpdateWithoutPublicationInputObjectSchema } from '../internals';;
import { CommentUncheckedUpdateWithoutPublicationInputObjectSchema } from '../internals';;
import { CommentCreateWithoutPublicationInputObjectSchema } from '../internals';;
import { CommentUncheckedCreateWithoutPublicationInputObjectSchema } from '../internals';

export const CommentUpsertWithWhereUniqueWithoutPublicationInputObjectSchema = Yup.object({
    where: CommentWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([CommentUpdateWithoutPublicationInputObjectSchema,
CommentUncheckedUpdateWithoutPublicationInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([CommentCreateWithoutPublicationInputObjectSchema,
CommentUncheckedCreateWithoutPublicationInputObjectSchema])
});
