// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PublicationCreateWithoutCommentInputObjectSchema } from '../internals';;
import { PublicationUncheckedCreateWithoutCommentInputObjectSchema } from '../internals';;
import { PublicationCreateOrConnectWithoutCommentInputObjectSchema } from '../internals';;
import { PublicationUpsertWithoutCommentInputObjectSchema } from '../internals';;
import { PublicationWhereUniqueInputObjectSchema } from '../internals';;
import { PublicationUpdateWithoutCommentInputObjectSchema } from '../internals';;
import { PublicationUncheckedUpdateWithoutCommentInputObjectSchema } from '../internals';

export const PublicationUpdateOneRequiredWithoutCommentNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PublicationCreateWithoutCommentInputObjectSchema,
PublicationUncheckedCreateWithoutCommentInputObjectSchema]),  connectOrCreate: PublicationCreateOrConnectWithoutCommentInputObjectSchema,  upsert: PublicationUpsertWithoutCommentInputObjectSchema,  connect: PublicationWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([PublicationUpdateWithoutCommentInputObjectSchema,
PublicationUncheckedUpdateWithoutCommentInputObjectSchema])
});
