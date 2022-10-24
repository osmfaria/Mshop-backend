// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AddressUpdateWithoutUserInputObjectSchema } from '../internals';;
import { AddressUncheckedUpdateWithoutUserInputObjectSchema } from '../internals';;
import { AddressCreateWithoutUserInputObjectSchema } from '../internals';;
import { AddressUncheckedCreateWithoutUserInputObjectSchema } from '../internals';

export const AddressUpsertWithoutUserInputObjectSchema = Yup.object({
    update: Yup.mixed().oneOfSchemas([AddressUpdateWithoutUserInputObjectSchema,
AddressUncheckedUpdateWithoutUserInputObjectSchema]),  create: Yup.mixed().oneOfSchemas([AddressCreateWithoutUserInputObjectSchema,
AddressUncheckedCreateWithoutUserInputObjectSchema])
});
