// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const NestedDateTimeNullableFilterObjectSchema = Yup.object({
    lt: Yup.date(),  lte: Yup.date(),  gt: Yup.date(),  gte: Yup.date(),  not: Yup.mixed().oneOfSchemas([Yup.lazy(() => NestedDateTimeNullableFilterObjectSchema.default(undefined))])
});
