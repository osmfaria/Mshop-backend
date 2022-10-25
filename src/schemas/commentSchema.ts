import * as yup from 'yup'
import { SchemaOf } from 'yup'
import { IComment } from '../interfaces/commentInterface'

export const commentCreateSchema: SchemaOf<IComment> = yup
  .object()
  .shape({
    description: yup.string().required().max(200),
  })
