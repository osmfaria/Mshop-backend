// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PublicationWhereUniqueInputObjectSchema } from '../internals';;
import { PublicationUpdateWithoutUserInputObjectSchema } from '../internals';;
import { PublicationUncheckedUpdateWithoutUserInputObjectSchema } from '../internals';

export const PublicationUpdateWithWhereUniqueWithoutUserInputObjectSchema = Yup.object({
    where: PublicationWhereUniqueInputObjectSchema,  data: Yup.mixed().oneOfSchemas([PublicationUpdateWithoutUserInputObjectSchema,
PublicationUncheckedUpdateWithoutUserInputObjectSchema])
});
