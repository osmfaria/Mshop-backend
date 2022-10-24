import * as Yup from 'yup';

export const Vehicle_TypeSchema = Yup.mixed().oneOf(["CAR","MOTORCYCLE"])