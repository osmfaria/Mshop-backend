// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedIntNullableFilterObjectSchema } from '../internals';;
import { NestedDateTimeNullableFilterObjectSchema } from '../internals';

export const NestedDateTimeNullableWithAggregatesFilterObjectSchema = Yup.object({
    lt: Yup.date(),  lte: Yup.date(),  gt: Yup.date(),  gte: Yup.date(),  not: Yup.mixed().oneOfSchemas([Yup.lazy(() => NestedDateTimeNullableWithAggregatesFilterObjectSchema.default(undefined))]),  _count: NestedIntNullableFilterObjectSchema,  _min: NestedDateTimeNullableFilterObjectSchema,  _max: NestedDateTimeNullableFilterObjectSchema
});
