// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ImageWhereUniqueInputObjectSchema } from '../internals';;
import { ImageUpdateWithoutPublicationInputObjectSchema } from '../internals';;
import { ImageUncheckedUpdateWithoutPublicationInputObjectSchema } from '../internals';

export const ImageUpdateWithWhereUniqueWithoutPublicationInputObjectSchema = Yup.object({
    where: ImageWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([ImageUpdateWithoutPublicationInputObjectSchema,
ImageUncheckedUpdateWithoutPublicationInputObjectSchema])
});
