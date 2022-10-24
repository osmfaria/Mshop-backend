// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AddressCreateWithoutUserInputObjectSchema } from '../internals';;
import { AddressUncheckedCreateWithoutUserInputObjectSchema } from '../internals';;
import { AddressCreateOrConnectWithoutUserInputObjectSchema } from '../internals';;
import { AddressWhereUniqueInputObjectSchema } from '../internals';

export const AddressCreateNestedOneWithoutUserInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([AddressCreateWithoutUserInputObjectSchema,
AddressUncheckedCreateWithoutUserInputObjectSchema]),  connectOrCreate: AddressCreateOrConnectWithoutUserInputObjectSchema,  connect: AddressWhereUniqueInputObjectSchema
});
