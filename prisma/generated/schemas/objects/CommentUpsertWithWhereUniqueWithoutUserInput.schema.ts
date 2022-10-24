// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CommentWhereUniqueInputObjectSchema } from '../internals';;
import { CommentUpdateWithoutUserInputObjectSchema } from '../internals';;
import { CommentUncheckedUpdateWithoutUserInputObjectSchema } from '../internals';;
import { CommentCreateWithoutUserInputObjectSchema } from '../internals';;
import { CommentUncheckedCreateWithoutUserInputObjectSchema } from '../internals';

export const CommentUpsertWithWhereUniqueWithoutUserInputObjectSchema = Yup.object({
    where: CommentWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([CommentUpdateWithoutUserInputObjectSchema,
CommentUncheckedUpdateWithoutUserInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([CommentCreateWithoutUserInputObjectSchema,
CommentUncheckedCreateWithoutUserInputObjectSchema])
});
