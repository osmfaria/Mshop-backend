// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PublicationUpdateWithoutCommentInputObjectSchema } from '../internals';;
import { PublicationUncheckedUpdateWithoutCommentInputObjectSchema } from '../internals';;
import { PublicationCreateWithoutCommentInputObjectSchema } from '../internals';;
import { PublicationUncheckedCreateWithoutCommentInputObjectSchema } from '../internals';

export const PublicationUpsertWithoutCommentInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([PublicationUpdateWithoutCommentInputObjectSchema,
PublicationUncheckedUpdateWithoutCommentInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([PublicationCreateWithoutCommentInputObjectSchema,
PublicationUncheckedCreateWithoutCommentInputObjectSchema])
});
