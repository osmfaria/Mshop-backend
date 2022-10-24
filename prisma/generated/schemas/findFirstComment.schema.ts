import * as Yup from 'yup';
import { CommentWhereInputObjectSchema, CommentOrderByWithRelationInputObjectSchema, CommentWhereUniqueInputObjectSchema } from './internals';
import { CommentScalarFieldEnumSchema } from './internals'

export const CommentFindFirstSchema = Yup.object({ where: CommentWhereInputObjectSchema, orderBy: CommentOrderByWithRelationInputObjectSchema, cursor: CommentWhereUniqueInputObjectSchema, take: Yup.number(), skip: Yup.number(), distinct: Yup.array().of(CommentScalarFieldEnumSchema) }).required()