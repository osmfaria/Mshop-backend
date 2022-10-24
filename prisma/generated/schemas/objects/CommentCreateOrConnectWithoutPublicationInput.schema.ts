// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { CommentWhereUniqueInputObjectSchema } from '../internals';;
import { CommentCreateWithoutPublicationInputObjectSchema } from '../internals';;
import { CommentUncheckedCreateWithoutPublicationInputObjectSchema } from '../internals';

export const CommentCreateOrConnectWithoutPublicationInputObjectSchema = Yup.object({
    where: CommentWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([CommentCreateWithoutPublicationInputObjectSchema,
CommentUncheckedCreateWithoutPublicationInputObjectSchema])
});
