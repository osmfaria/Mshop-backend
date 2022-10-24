// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { QueryModeSchema } from '../internals';;
import { NestedStringFilterObjectSchema } from '../internals';

export const StringFilterObjectSchema = Yup.object({
    equals: Yup.string(),  in: Yup.array().of(Yup.string()),  notIn: Yup.array().of(Yup.string()),  lt: Yup.string(),  lte: Yup.string(),  gt: Yup.string(),  gte: Yup.string(),  contains: Yup.string(),  startsWith: Yup.string(),  endsWith: Yup.string(),  mode: QueryModeSchema,  not: Yup.mixed().oneOfSchemas([Yup.string(),
NestedStringFilterObjectSchema])
});
