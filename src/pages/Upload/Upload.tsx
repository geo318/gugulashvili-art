import { FormWrapper, Input } from 'Components';
import { uploadSchemaDefaults } from 'config';
import { uploadSchema as schema } from 'schema';
import { useUpload } from './useUpload';

export const Upload = () => {
  const { handleDataUpload, img } = useUpload();
  return (
    <div className='flex flex-col items-center h-screen mt-28'>
      <h2 className='text-xl font-semibold mb-10'>Upload new painting</h2>
      <div className='bg-white border border-slate-100 rounded-md w-full max-w-xs p-5 shrink'>
        <FormWrapper
          schema={schema}
          defaultValues={uploadSchemaDefaults}
          onSubmit={handleDataUpload}
        >
          <Input name='name' placeholder='name of a painting' label='Name' />
          <Input
            name='size'
            placeholder='size: width X height in inches'
            label='Size'
          />
          <Input name='year' placeholder='year of creation' label='Year' />
          <Input
            name='description'
            placeholder='description'
            label='Description'
          />
          <Input name='img' type='file' label='Image - max 2MB' />
        </FormWrapper>
      </div>
      {img?.name && (
        <div className='mt-10'>
          <img
            src={`${import.meta.env.VITE_BASE_URL}${img.image?.thumbnail}`}
            alt=''
          />
        </div>
      )}
    </div>
  );
};
