// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const AddressWhereUniqueInputObjectSchema = Yup.object({
    id: Yup.string(),  userId: Yup.string()
});
