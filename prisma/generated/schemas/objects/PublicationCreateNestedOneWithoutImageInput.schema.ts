// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { PublicationCreateWithoutImageInputObjectSchema } from '../internals';;
import { PublicationUncheckedCreateWithoutImageInputObjectSchema } from '../internals';;
import { PublicationCreateOrConnectWithoutImageInputObjectSchema } from '../internals';;
import { PublicationWhereUniqueInputObjectSchema } from '../internals';

export const PublicationCreateNestedOneWithoutImageInputObjectSchema = Yup.object({
    create: Yup.mixed().oneOfSchemas([PublicationCreateWithoutImageInputObjectSchema,
PublicationUncheckedCreateWithoutImageInputObjectSchema]),  connectOrCreate: PublicationCreateOrConnectWithoutImageInputObjectSchema,  connect: PublicationWhereUniqueInputObjectSchema
});
