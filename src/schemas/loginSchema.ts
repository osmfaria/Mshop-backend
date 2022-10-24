import * as yup from 'yup'
import { SchemaOf } from 'yup'
const loginSchema: SchemaOf<{ email: string; password: string }> = yup
  .object()
  .shape({
    email: yup.string().email().required().max(50),
    password: yup.string().required().min(4).max(12),
  })
export default loginSchema
