import * as Yup from 'yup';

export const Account_TypeSchema = Yup.mixed().oneOf(["SELLER","BUYER"])