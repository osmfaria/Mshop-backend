// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumAccount_TypeFilterObjectSchema } from '../internals';

export const EnumAccount_TypeFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumAccount_TypeFilterObjectSchema])
});
