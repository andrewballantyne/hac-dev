import { number, object, string } from 'yup';

/**
 * @see EnvironmentFormData
 */
export const validationSchema = object().shape({
  name: string().min(1).required(),
  strategy: string().min(1).required(),
  order: number().min(1).required(),
  cluster: string().required(),
});
