// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CommentWhereUniqueInputObjectSchema } from '../internals';;
import { CommentCreateWithoutUserInputObjectSchema } from '../internals';;
import { CommentUncheckedCreateWithoutUserInputObjectSchema } from '../internals';

export const CommentCreateOrConnectWithoutUserInputObjectSchema = Yup.object({
    where: CommentWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([CommentCreateWithoutUserInputObjectSchema,
CommentUncheckedCreateWithoutUserInputObjectSchema])
});
