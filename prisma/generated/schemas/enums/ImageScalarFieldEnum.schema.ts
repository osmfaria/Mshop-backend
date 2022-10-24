import * as Yup from 'yup';

export const ImageScalarFieldEnumSchema = Yup.mixed().oneOf(["id","link","publicationId"])