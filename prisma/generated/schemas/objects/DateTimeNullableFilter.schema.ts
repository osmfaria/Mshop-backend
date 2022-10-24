// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedDateTimeNullableFilterObjectSchema } from '../internals';

export const DateTimeNullableFilterObjectSchema = Yup.object({
    lt: Yup.date(),  lte: Yup.date(),  gt: Yup.date(),  gte: Yup.date(),  not: Yup.mixed().oneOfSchemas([NestedDateTimeNullableFilterObjectSchema])
});
