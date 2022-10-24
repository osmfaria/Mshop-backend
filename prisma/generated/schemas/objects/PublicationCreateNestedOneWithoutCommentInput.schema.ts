// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PublicationCreateWithoutCommentInputObjectSchema } from '../internals';;
import { PublicationUncheckedCreateWithoutCommentInputObjectSchema } from '../internals';;
import { PublicationCreateOrConnectWithoutCommentInputObjectSchema } from '../internals';;
import { PublicationWhereUniqueInputObjectSchema } from '../internals';

export const PublicationCreateNestedOneWithoutCommentInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PublicationCreateWithoutCommentInputObjectSchema,
PublicationUncheckedCreateWithoutCommentInputObjectSchema]),  connectOrCreate: PublicationCreateOrConnectWithoutCommentInputObjectSchema,  connect: PublicationWhereUniqueInputObjectSchema
});
