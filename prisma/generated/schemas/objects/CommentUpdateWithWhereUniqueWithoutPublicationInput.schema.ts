// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CommentWhereUniqueInputObjectSchema } from '../internals';;
import { CommentUpdateWithoutPublicationInputObjectSchema } from '../internals';;
import { CommentUncheckedUpdateWithoutPublicationInputObjectSchema } from '../internals';

export const CommentUpdateWithWhereUniqueWithoutPublicationInputObjectSchema = Yup.object({
    where: CommentWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([CommentUpdateWithoutPublicationInputObjectSchema,
CommentUncheckedUpdateWithoutPublicationInputObjectSchema])
});
