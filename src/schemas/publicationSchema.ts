import * as yup from 'yup'
import { SchemaOf } from 'yup'
import {
  IPublication,
  IPublicationUpdate,
} from '../interfaces/publicationInterface'

const vehicle_type = ['CAR', 'MOTORCYCLE'] as const
type vehicle_type = typeof vehicle_type[number]

export const publicationCreateSchema: SchemaOf<IPublication> = yup
  .object()
  .shape({
    type: yup.string().required().max(10),
    title: yup.string().required().max(60),
    year: yup.string().required().min(4).max(4),
    milieage: yup.number().required(),
    price: yup.number().required(),
    description: yup.string().required().max(300),
    vehicle_type: yup.mixed<vehicle_type>().oneOf([...vehicle_type]),
    images: yup
      .array()
      .of(
        yup.object().shape({
          link: yup.string().required(),
        })
      )
      .required(),
  })

export const publicationUpdateSchema: SchemaOf<IPublicationUpdate> = yup
  .object()
  .shape({
    type: yup.string().max(10),
    title: yup.string().max(60),
    year: yup.string().min(4).max(4),
    milieage: yup.number(),
    price: yup.number(),
    description: yup.string().max(300),
    vehicle_type: yup.mixed<vehicle_type>().oneOf([...vehicle_type]),
    images: yup.array().of(
      yup
        .object()
        .shape({
          link: yup.string(),
        })
        .required()
    ),
  })
