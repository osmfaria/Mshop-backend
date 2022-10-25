// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumAccount_TypeFilterObjectSchema } from '../internals';

export const NestedEnumAccount_TypeWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([Yup.lazy(() => NestedEnumAccount_TypeWithAggregatesFilterObjectSchema.default(undefined))]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumAccount_TypeFilterObjectSchema,  _max: NestedEnumAccount_TypeFilterObjectSchema
});
