// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AddressUncheckedCreateNestedOneWithoutUserInputObjectSchema } from '../internals';;
import { PublicationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from '../internals';

export const UserUncheckedCreateWithoutCommentInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  email: Yup.string().required(),  password: Yup.string().required(),  cpf: Yup.string().required(),  phone: Yup.string().required(),  description: Yup.mixed().oneOfSchemas([Yup.string()]),  createdAt: Yup.date(),  updatedAt: Yup.date(),  isAdmin: Yup.boolean(),  Address: AddressUncheckedCreateNestedOneWithoutUserInputObjectSchema,  Publication: PublicationUncheckedCreateNestedManyWithoutUserInputObjectSchema
});
