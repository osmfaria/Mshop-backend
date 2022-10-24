// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AddressCreateWithoutUserInputObjectSchema } from '../internals';;
import { AddressUncheckedCreateWithoutUserInputObjectSchema } from '../internals';;
import { AddressCreateOrConnectWithoutUserInputObjectSchema } from '../internals';;
import { AddressUpsertWithoutUserInputObjectSchema } from '../internals';;
import { AddressWhereUniqueInputObjectSchema } from '../internals';;
import { AddressUpdateWithoutUserInputObjectSchema } from '../internals';;
import { AddressUncheckedUpdateWithoutUserInputObjectSchema } from '../internals';

export const AddressUpdateOneWithoutUserNestedInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([AddressCreateWithoutUserInputObjectSchema,
AddressUncheckedCreateWithoutUserInputObjectSchema]),  connectOrCreate: AddressCreateOrConnectWithoutUserInputObjectSchema,  upsert: AddressUpsertWithoutUserInputObjectSchema,  disconnect: Yup.boolean(),  delete: Yup.boolean(),  connect: AddressWhereUniqueInputObjectSchema,  update: Yup.mixed().oneOfSchemas([AddressUpdateWithoutUserInputObjectSchema,
AddressUncheckedUpdateWithoutUserInputObjectSchema])
});
