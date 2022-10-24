// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ImageCreateWithoutPublicationInputObjectSchema } from '../internals';;
import { ImageUncheckedCreateWithoutPublicationInputObjectSchema } from '../internals';;
import { ImageCreateOrConnectWithoutPublicationInputObjectSchema } from '../internals';;
import { ImageCreateManyPublicationInputEnvelopeObjectSchema } from '../internals';;
import { ImageWhereUniqueInputObjectSchema } from '../internals';

export const ImageCreateNestedManyWithoutPublicationInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ImageCreateWithoutPublicationInputObjectSchema,
Yup.array().of(ImageCreateWithoutPublicationInputObjectSchema),
ImageUncheckedCreateWithoutPublicationInputObjectSchema,
Yup.array().of(ImageUncheckedCreateWithoutPublicationInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([ImageCreateOrConnectWithoutPublicationInputObjectSchema,
Yup.array().of(ImageCreateOrConnectWithoutPublicationInputObjectSchema)]),  createMany: ImageCreateManyPublicationInputEnvelopeObjectSchema,  connect: Yup.mixed().oneOfSchemas([ImageWhereUniqueInputObjectSchema,
Yup.array().of(ImageWhereUniqueInputObjectSchema)])
});
