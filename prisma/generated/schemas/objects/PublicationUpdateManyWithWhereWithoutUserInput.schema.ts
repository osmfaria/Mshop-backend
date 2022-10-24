// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PublicationScalarWhereInputObjectSchema } from '../internals';;
import { PublicationUpdateManyMutationInputObjectSchema } from '../internals';;
import { PublicationUncheckedUpdateManyWithoutPublicationInputObjectSchema } from '../internals';

export const PublicationUpdateManyWithWhereWithoutUserInputObjectSchema = Yup.object({
    where: PublicationScalarWhereInputObjectSchema,  data: Yup.mixed().oneOfSchemas([PublicationUpdateManyMutationInputObjectSchema,
PublicationUncheckedUpdateManyWithoutPublicationInputObjectSchema])
});
