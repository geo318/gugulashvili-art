import { FormWrapper, Input } from 'Components';
import {
  uploadSchema as schema,
  uploadSchemaPartial as partialSchema,
} from 'schema';
import { Props } from './type';

export const UploadForm: React.FC<Props & { edit?: boolean }> = ({
  handleSubmit,
  defaultValues,
  edit,
}) => (
  <FormWrapper
    schema={edit ? partialSchema : schema}
    defaultValues={defaultValues}
    onSubmit={handleSubmit}
    className='bg-white'
  >
    <Input name='name' placeholder='name of a painting' label='Name' />
    <Input
      name='size'
      placeholder='size: width X height in inches'
      label='Size'
    />
    <Input name='year' placeholder='year of creation' label='Year' />
    <Input name='description' placeholder='description' label='Description' />
    <Input name='img' type='file' label='Image - max 2MB' />
  </FormWrapper>
);
