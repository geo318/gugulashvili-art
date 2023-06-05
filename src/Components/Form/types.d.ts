import { FormSubmitFunction, Props } from 'types';
import { Schema } from 'zod';

export type FormProps = Props & {
  schema: Schema;
  defaultValues?: { [key: string]: any };
  onSubmit?: FormSubmitFunction<any>;
  buttonLabel?: string;
};
