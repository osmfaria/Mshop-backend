// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PublicationCreateWithoutImageInputObjectSchema } from '../internals';;
import { PublicationUncheckedCreateWithoutImageInputObjectSchema } from '../internals';;
import { PublicationCreateOrConnectWithoutImageInputObjectSchema } from '../internals';;
import { PublicationUpsertWithoutImageInputObjectSchema } from '../internals';;
import { PublicationWhereUniqueInputObjectSchema } from '../internals';;
import { PublicationUpdateWithoutImageInputObjectSchema } from '../internals';;
import { PublicationUncheckedUpdateWithoutImageInputObjectSchema } from '../internals';

export const PublicationUpdateOneRequiredWithoutImageNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PublicationCreateWithoutImageInputObjectSchema,
PublicationUncheckedCreateWithoutImageInputObjectSchema]),  connectOrCreate: PublicationCreateOrConnectWithoutImageInputObjectSchema,  upsert: PublicationUpsertWithoutImageInputObjectSchema,  connect: PublicationWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([PublicationUpdateWithoutImageInputObjectSchema,
PublicationUncheckedUpdateWithoutImageInputObjectSchema])
});
