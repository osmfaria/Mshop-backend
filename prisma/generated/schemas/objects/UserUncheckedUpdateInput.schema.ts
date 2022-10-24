// @ts-nocheck
import * as Yup from 'yup';
import "../helpers/oneOfSchemas.helper.ts"
import { StringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { NullableStringFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { DateTimeFieldUpdateOperationsInputObjectSchema } from '../internals';;
import { AddressUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from '../internals';;
import { PublicationUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from '../internals';;
import { CommentUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from '../internals';

export const UserUncheckedUpdateInputObjectSchema = Yup.object({
    id: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  name: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  email: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  password: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  cpf: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  phone: Yup.mixed().oneOfSchemas([Yup.string(),
StringFieldUpdateOperationsInputObjectSchema]),  birthdate: Yup.mixed().oneOfSchemas([NullableDateTimeFieldUpdateOperationsInputObjectSchema]),  description: Yup.mixed().oneOfSchemas([Yup.string(),
NullableStringFieldUpdateOperationsInputObjectSchema]),  createdAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  updatedAt: Yup.mixed().oneOfSchemas([DateTimeFieldUpdateOperationsInputObjectSchema]),  Address: AddressUncheckedUpdateOneWithoutUserNestedInputObjectSchema,  Publication: PublicationUncheckedUpdateManyWithoutUserNestedInputObjectSchema,  Comment: CommentUncheckedUpdateManyWithoutUserNestedInputObjectSchema
});
