import * as Yup from 'yup';

export const UserScalarFieldEnumSchema = Yup.mixed().oneOf(["id","name","email","password","cpf","phone","birthdate","description","createdAt","updatedAt","isAdmin"])