// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PublicationWhereUniqueInputObjectSchema } from '../internals';;
import { PublicationCreateWithoutUserInputObjectSchema } from '../internals';;
import { PublicationUncheckedCreateWithoutUserInputObjectSchema } from '../internals';

export const PublicationCreateOrConnectWithoutUserInputObjectSchema = Yup.object({
    where: PublicationWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([PublicationCreateWithoutUserInputObjectSchema,
PublicationUncheckedCreateWithoutUserInputObjectSchema])
});
