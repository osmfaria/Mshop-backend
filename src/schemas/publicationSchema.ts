import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IUser, IUserUpdate } from '../interfaces/userInterface'
import {IPublicationSchema,IPublicationSchemaUpdate} from "../interfaces/publication"

export const publicationCreateSchema: SchemaOf<IPublicationSchema> = yup.object().shape({
    type: yup.string().required('Type field is required').max(10),
    title: yup.string().required("Title field is required").max(60),
    year: yup.string().required().min(4).max(4),
    milieage: yup.number().required("Milieage field is required"),
    price: yup.number().required("Price field is required"),
    description: yup.string().required("Description field is required").max(300),
    vehicle_type: yup.string().required("Vehicle type required").max(10),
    link: yup.string().required('image link required')
})


export const publicationUpdateSchema: SchemaOf<IPublicationSchemaUpdate> = yup.object().shape({
    type: yup.string(),
    title: yup.string().max(60),
    year: yup.string().min(4).max(4),
    milieage: yup.number(),
    price: yup.number(),
    description: yup.string().max(300),
    vehicle_type: yup.string().max(10),
    link: yup.string()
})
