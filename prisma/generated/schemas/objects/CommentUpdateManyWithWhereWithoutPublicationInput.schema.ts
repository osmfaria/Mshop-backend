// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CommentScalarWhereInputObjectSchema } from '../internals';;
import { CommentUpdateManyMutationInputObjectSchema } from '../internals';;
import { CommentUncheckedUpdateManyWithoutCommentInputObjectSchema } from '../internals';

export const CommentUpdateManyWithWhereWithoutPublicationInputObjectSchema = Yup.object({
    where: CommentScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([CommentUpdateManyMutationInputObjectSchema,
CommentUncheckedUpdateManyWithoutCommentInputObjectSchema])
});
