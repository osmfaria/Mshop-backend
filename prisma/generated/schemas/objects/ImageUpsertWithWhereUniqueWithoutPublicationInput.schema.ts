// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ImageWhereUniqueInputObjectSchema } from '../internals';;
import { ImageUpdateWithoutPublicationInputObjectSchema } from '../internals';;
import { ImageUncheckedUpdateWithoutPublicationInputObjectSchema } from '../internals';;
import { ImageCreateWithoutPublicationInputObjectSchema } from '../internals';;
import { ImageUncheckedCreateWithoutPublicationInputObjectSchema } from '../internals';

export const ImageUpsertWithWhereUniqueWithoutPublicationInputObjectSchema = Yup.object({
    where: ImageWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([ImageUpdateWithoutPublicationInputObjectSchema,
ImageUncheckedUpdateWithoutPublicationInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([ImageCreateWithoutPublicationInputObjectSchema,
ImageUncheckedCreateWithoutPublicationInputObjectSchema])
});
