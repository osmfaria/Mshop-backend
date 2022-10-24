// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumVehicle_TypeFilterObjectSchema } from '../internals';

export const NestedEnumVehicle_TypeWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([Yup.lazy(() => NestedEnumVehicle_TypeWithAggregatesFilterObjectSchema.default(undefined))]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumVehicle_TypeFilterObjectSchema,  _max: NestedEnumVehicle_TypeFilterObjectSchema
});
