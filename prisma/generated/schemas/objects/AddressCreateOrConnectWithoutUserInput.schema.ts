// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AddressWhereUniqueInputObjectSchema } from '../internals';;
import { AddressCreateWithoutUserInputObjectSchema } from '../internals';;
import { AddressUncheckedCreateWithoutUserInputObjectSchema } from '../internals';

export const AddressCreateOrConnectWithoutUserInputObjectSchema = Yup.object({
    where: AddressWhereUniqueInputObjectSchema,  create: Yup.mixed().oneOfSchemas([AddressCreateWithoutUserInputObjectSchema,
AddressUncheckedCreateWithoutUserInputObjectSchema])
});
