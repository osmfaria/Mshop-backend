// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const NestedEnumVehicle_TypeFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([Yup.lazy(() => NestedEnumVehicle_TypeFilterObjectSchema.default(undefined))])
});
