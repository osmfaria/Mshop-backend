import * as Yup from 'yup';

export const CommentScalarFieldEnumSchema = Yup.mixed().oneOf(["id","description","createdAt","updatedAt","userId","publicationId"])