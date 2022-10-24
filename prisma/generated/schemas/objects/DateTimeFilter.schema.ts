// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { NestedDateTimeFilterObjectSchema } from '../internals';

export const DateTimeFilterObjectSchema = Yup.object({
    equals: Yup.date(),  in: Yup.array().of(Yup.date()),  notIn: Yup.array().of(Yup.date()),  lt: Yup.date(),  lte: Yup.date(),  gt: Yup.date(),  gte: Yup.date(),  not: Yup.mixed().oneOfSchemas([NestedDateTimeFilterObjectSchema])
});
