// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedDateTimeNullableWithAggregatesFilterObjectSchema } from '../internals';;
import { NestedIntNullableFilterObjectSchema } from '../internals';;
import { NestedDateTimeNullableFilterObjectSchema } from '../internals';

export const DateTimeNullableWithAggregatesFilterObjectSchema = Yup.object({
    lt: Yup.date(),  lte: Yup.date(),  gt: Yup.date(),  gte: Yup.date(),  not: Yup.mixed().oneOfSchemas([NestedDateTimeNullableWithAggregatesFilterObjectSchema]),  _count: NestedIntNullableFilterObjectSchema,  _min: NestedDateTimeNullableFilterObjectSchema,  _max: NestedDateTimeNullableFilterObjectSchema
});
