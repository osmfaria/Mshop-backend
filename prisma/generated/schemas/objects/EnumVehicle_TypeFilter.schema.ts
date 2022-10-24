// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumVehicle_TypeFilterObjectSchema } from '../internals';

export const EnumVehicle_TypeFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumVehicle_TypeFilterObjectSchema])
});
