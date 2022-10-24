// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const NestedDateTimeFilterObjectSchema = Yup.object({
    equals: Yup.date(),  in: Yup.array().of(Yup.date()),  notIn: Yup.array().of(Yup.date()),  lt: Yup.date(),  lte: Yup.date(),  gt: Yup.date(),  gte: Yup.date(),  not: Yup.mixed().oneOfSchemas([Yup.lazy(() => NestedDateTimeFilterObjectSchema.default(undefined))])
});
