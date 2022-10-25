// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedEnumAccount_TypeWithAggregatesFilterObjectSchema } from '../internals';;
import { NestedIntFilterObjectSchema } from '../internals';;
import { NestedEnumAccount_TypeFilterObjectSchema } from '../internals';

export const EnumAccount_TypeWithAggregatesFilterObjectSchema = Yup.object({
    not: Yup.mixed().oneOfSchemas([NestedEnumAccount_TypeWithAggregatesFilterObjectSchema]),  _count: NestedIntFilterObjectSchema,  _min: NestedEnumAccount_TypeFilterObjectSchema,  _max: NestedEnumAccount_TypeFilterObjectSchema
});
