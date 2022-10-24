// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PublicationUpdateWithoutImageInputObjectSchema } from '../internals';;
import { PublicationUncheckedUpdateWithoutImageInputObjectSchema } from '../internals';;
import { PublicationCreateWithoutImageInputObjectSchema } from '../internals';;
import { PublicationUncheckedCreateWithoutImageInputObjectSchema } from '../internals';

export const PublicationUpsertWithoutImageInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([PublicationUpdateWithoutImageInputObjectSchema,
PublicationUncheckedUpdateWithoutImageInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([PublicationCreateWithoutImageInputObjectSchema,
PublicationUncheckedCreateWithoutImageInputObjectSchema])
});
