// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AddressCreateNestedOneWithoutUserInputObjectSchema } from '../internals';;
import { CommentCreateNestedManyWithoutUserInputObjectSchema } from '../internals';

export const UserCreateWithoutPublicationInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  email: Yup.string().required(),  password: Yup.string().required(),  cpf: Yup.string().required(),  phone: Yup.string().required(),  description: Yup.mixed().oneOfSchemas([Yup.string()]),  createdAt: Yup.date(),  updatedAt: Yup.date(),  isAdmin: Yup.boolean(),  Address: AddressCreateNestedOneWithoutUserInputObjectSchema,  Comment: CommentCreateNestedManyWithoutUserInputObjectSchema
});
