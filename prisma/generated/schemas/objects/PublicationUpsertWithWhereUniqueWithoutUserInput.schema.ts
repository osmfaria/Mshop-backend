// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PublicationWhereUniqueInputObjectSchema } from '../internals';;
import { PublicationUpdateWithoutUserInputObjectSchema } from '../internals';;
import { PublicationUncheckedUpdateWithoutUserInputObjectSchema } from '../internals';;
import { PublicationCreateWithoutUserInputObjectSchema } from '../internals';;
import { PublicationUncheckedCreateWithoutUserInputObjectSchema } from '../internals';

export const PublicationUpsertWithWhereUniqueWithoutUserInputObjectSchema = Yup.object({
    where: PublicationWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([PublicationUpdateWithoutUserInputObjectSchema,
PublicationUncheckedUpdateWithoutUserInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([PublicationCreateWithoutUserInputObjectSchema,
PublicationUncheckedCreateWithoutUserInputObjectSchema])
});
