// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PublicationWhereUniqueInputObjectSchema } from '../internals';;
import { PublicationCreateWithoutCommentInputObjectSchema } from '../internals';;
import { PublicationUncheckedCreateWithoutCommentInputObjectSchema } from '../internals';

export const PublicationCreateOrConnectWithoutCommentInputObjectSchema = Yup.object({
    where: PublicationWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([PublicationCreateWithoutCommentInputObjectSchema,
PublicationUncheckedCreateWithoutCommentInputObjectSchema])
});
