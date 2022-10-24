// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PublicationWhereUniqueInputObjectSchema } from '../internals';;
import { PublicationCreateWithoutImageInputObjectSchema } from '../internals';;
import { PublicationUncheckedCreateWithoutImageInputObjectSchema } from '../internals';

export const PublicationCreateOrConnectWithoutImageInputObjectSchema = Yup.object({
    where: PublicationWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([PublicationCreateWithoutImageInputObjectSchema,
PublicationUncheckedCreateWithoutImageInputObjectSchema])
});
