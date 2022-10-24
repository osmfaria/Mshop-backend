import * as Yup from 'yup';

export const AddressScalarFieldEnumSchema = Yup.mixed().oneOf(["id","address","cep","state","city","number","complement","createdAt","updatedAt","userId"])