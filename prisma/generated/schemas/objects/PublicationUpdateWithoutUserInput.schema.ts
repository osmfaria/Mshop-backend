// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { FloatFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { EnumVehicle_TypeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { CommentUpdateManyWithoutPublicationNestedInputObjectSchema } from '../internals';;
import { ImageUpdateManyWithoutPublicationNestedInputObjectSchema } from '../internals';

export const PublicationUpdateWithoutUserInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  type: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  title: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  year: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  milieage: Yup.mixed().oneOfSchemas([Yup.number(),
FloatFieldUpdateOperationsInputObjectSchema]),  price: Yup.mixed().oneOfSchemas([Yup.number(),
FloatFieldUpdateOperationsInputObjectSchema]),  description: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  vehicle_type: Yup.mixed().oneOfSchemas([EnumVehicle_TypeFieldUpdateOperationsInputObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  Comment: CommentUpdateManyWithoutPublicationNestedInputObjectSchema,  Image: ImageUpdateManyWithoutPublicationNestedInputObjectSchema
});
