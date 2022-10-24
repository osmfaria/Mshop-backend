// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { ImageCreateWithoutPublicationInputObjectSchema } from '../internals';;
import { ImageUncheckedCreateWithoutPublicationInputObjectSchema } from '../internals';;
import { ImageCreateOrConnectWithoutPublicationInputObjectSchema } from '../internals';;
import { ImageUpsertWithWhereUniqueWithoutPublicationInputObjectSchema } from '../internals';;
import { ImageCreateManyPublicationInputEnvelopeObjectSchema } from '../internals';;
import { ImageWhereUniqueInputObjectSchema } from '../internals';;
import { ImageUpdateWithWhereUniqueWithoutPublicationInputObjectSchema } from '../internals';;
import { ImageUpdateManyWithWhereWithoutPublicationInputObjectSchema } from '../internals';;
import { ImageScalarWhereInputObjectSchema } from '../internals';

export const ImageUncheckedUpdateManyWithoutPublicationNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([ImageCreateWithoutPublicationInputObjectSchema,
Yup.array().of(ImageCreateWithoutPublicationInputObjectSchema),
ImageUncheckedCreateWithoutPublicationInputObjectSchema,
Yup.array().of(ImageUncheckedCreateWithoutPublicationInputObjectSchema)]),  connectOrCreate: Yup.mixed().oneOfSchemas([ImageCreateOrConnectWithoutPublicationInputObjectSchema,
Yup.array().of(ImageCreateOrConnectWithoutPublicationInputObjectSchema)]),  upsert: Yup.mixed().oneOfSchemas([ImageUpsertWithWhereUniqueWithoutPublicationInputObjectSchema,
Yup.array().of(ImageUpsertWithWhereUniqueWithoutPublicationInputObjectSchema)]),  createMany: ImageCreateManyPublicationInputEnvelopeObjectSchema,  set: Yup.mixed().oneOfSchemas([ImageWhereUniqueInputObjectSchema,
Yup.array().of(ImageWhereUniqueInputObjectSchema)]),  disconnect: Yup.mixed().oneOfSchemas([ImageWhereUniqueInputObjectSchema,
Yup.array().of(ImageWhereUniqueInputObjectSchema)]),  delete: Yup.mixed().oneOfSchemas([ImageWhereUniqueInputObjectSchema,
Yup.array().of(ImageWhereUniqueInputObjectSchema)]),  connect: Yup.mixed().oneOfSchemas([ImageWhereUniqueInputObjectSchema,
Yup.array().of(ImageWhereUniqueInputObjectSchema)]),  update: Yup.mixed().oneOfSchemas([ImageUpdateWithWhereUniqueWithoutPublicationInputObjectSchema,
Yup.array().of(ImageUpdateWithWhereUniqueWithoutPublicationInputObjectSchema)]),  updateMany: Yup.mixed().oneOfSchemas([ImageUpdateManyWithWhereWithoutPublicationInputObjectSchema,
Yup.array().of(ImageUpdateManyWithWhereWithoutPublicationInputObjectSchema)]),  deleteMany: Yup.mixed().oneOfSchemas([ImageScalarWhereInputObjectSchema,
Yup.array().of(ImageScalarWhereInputObjectSchema)])
});
