// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CommentWhereUniqueInputObjectSchema } from '../internals';;
import { CommentUpdateWithoutUserInputObjectSchema } from '../internals';;
import { CommentUncheckedUpdateWithoutUserInputObjectSchema } from '../internals';

export const CommentUpdateWithWhereUniqueWithoutUserInputObjectSchema = Yup.object({
    where: CommentWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([CommentUpdateWithoutUserInputObjectSchema,
CommentUncheckedUpdateWithoutUserInputObjectSchema])
});
