// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"


export const NestedIntFilterObjectSchema = Yup.object({
    equals: Yup.number(),  in: Yup.array().of(Yup.number()),  notIn: Yup.array().of(Yup.number()),  lt: Yup.number(),  lte: Yup.number(),  gt: Yup.number(),  gte: Yup.number(),  not: Yup.mixed().oneOfSchemas([Yup.number(),
Yup.lazy(() => NestedIntFilterObjectSchema.default(undefined))])
});
