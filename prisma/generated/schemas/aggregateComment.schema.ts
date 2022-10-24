import * as Yup from 'yup';
import { CommentWhereInputObjectSchema, CommentOrderByWithRelationInputObjectSchema, CommentWhereUniqueInputObjectSchema } from './internals'

export const CommentAggregateSchema = Yup.object({ where: CommentWhereInputObjectSchema, orderBy: CommentOrderByWithRelationInputObjectSchema, cursor: CommentWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number()  }).required()