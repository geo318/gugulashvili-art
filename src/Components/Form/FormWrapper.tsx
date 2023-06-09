import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormProps } from './types';

export const FormWrapper: React.FC<FormProps> = ({
  children,
  schema,
  defaultValues,
  onSubmit = (data) => console.log(data),
  className = '',
  buttonLabel = 'submit',
}) => {
  const form = useForm({
    mode: 'onBlur',
    resolver: zodResolver(schema),
    defaultValues: defaultValues || {},
  });

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={className}>
        <div className='flex flex-col gap-2'>{children}</div>
        <button className='bg-blue-500 px-5 py-2 rounded-md text-white w-full mt-2 hover:bg-blue-600'>
          {buttonLabel}
        </button>
      </form>
    </FormProvider>
  );
};
