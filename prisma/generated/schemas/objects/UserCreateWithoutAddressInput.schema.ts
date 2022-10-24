// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PublicationCreateNestedManyWithoutUserInputObjectSchema } from '../internals';;
import { CommentCreateNestedManyWithoutUserInputObjectSchema } from '../internals';

export const UserCreateWithoutAddressInputObjectSchema = Yup.object({
    id: Yup.string(),  name: Yup.string().required(),  email: Yup.string().required(),  password: Yup.string().required(),  cpf: Yup.string().required(),  phone: Yup.string().required(),  description: Yup.mixed().oneOfSchemas([Yup.string()]),  createdAt: Yup.date(),  updatedAt: Yup.date(),  Publication: PublicationCreateNestedManyWithoutUserInputObjectSchema,  Comment: CommentCreateNestedManyWithoutUserInputObjectSchema
});
