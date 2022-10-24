import * as Yup from 'yup';
import { CommentWhereInputObjectSchema, CommentOrderByWithAggregationInputObjectSchema, CommentScalarWhereWithAggregatesInputObjectSchema } from './internals';
import { CommentScalarFieldEnumSchema } from './internals'

export const CommentGroupBySchema = Yup.object({ where: CommentWhereInputObjectSchema, orderBy: CommentOrderByWithAggregationInputObjectSchema, having: CommentScalarWhereWithAggregatesInputObjectSchema, take: Yup.number(), skip: Yup.number(), by: Yup.array().of(CommentScalarFieldEnumSchema).required()  }).required()