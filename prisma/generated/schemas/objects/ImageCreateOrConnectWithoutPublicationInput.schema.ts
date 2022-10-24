// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ImageWhereUniqueInputObjectSchema } from '../internals';;
import { ImageCreateWithoutPublicationInputObjectSchema } from '../internals';;
import { ImageUncheckedCreateWithoutPublicationInputObjectSchema } from '../internals';

export const ImageCreateOrConnectWithoutPublicationInputObjectSchema = Yup.object({
    where: ImageWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([ImageCreateWithoutPublicationInputObjectSchema,
ImageUncheckedCreateWithoutPublicationInputObjectSchema])
});
