// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumVehicle_TypeWithAggregatesFilterObjectSchema } from '../internals';;
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumVehicle_TypeFilterObjectSchema } from '../internals';

export const EnumVehicle_TypeWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumVehicle_TypeWithAggregatesFilterObjectSchema]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumVehicle_TypeFilterObjectSchema,  _max: NestedEnumVehicle_TypeFilterObjectSchema
});
