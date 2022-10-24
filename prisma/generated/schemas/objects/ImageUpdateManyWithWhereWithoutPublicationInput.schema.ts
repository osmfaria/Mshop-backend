// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ImageScalarWhereInputObjectSchema } from '../internals';;
import { ImageUpdateManyMutationInputObjectSchema } from '../internals';;
import { ImageUncheckedUpdateManyWithoutImageInputObjectSchema } from '../internals';

export const ImageUpdateManyWithWhereWithoutPublicationInputObjectSchema = Yup.object({
    where: ImageScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([ImageUpdateManyMutationInputObjectSchema,
ImageUncheckedUpdateManyWithoutImageInputObjectSchema])
});
