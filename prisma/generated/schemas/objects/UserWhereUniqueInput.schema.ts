// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const UserWhereUniqueInputObjectSchema = Yup.object({
    id: Yup.string(),  email: Yup.string(),  cpf: Yup.string(),  phone: Yup.string()
});
