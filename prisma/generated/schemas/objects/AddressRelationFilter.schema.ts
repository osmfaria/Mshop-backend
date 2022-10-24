// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { AddressWhereInputObjectSchema } from '../internals';

export const AddressRelationFilterObjectSchema = Yup.object({
    is: Yup.mixed().oneOfSchemas([AddressWhereInputObjectSchema]),  isNot: Yup.mixed().oneOfSchemas([AddressWhereInputObjectSchema])
});
