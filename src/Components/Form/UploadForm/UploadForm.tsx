import { FormWrapper, Input } from 'Components';
import { uploadSchema as schema } from 'schema';
import { Props } from './type';

export const UploadForm: React.FC<Props> = ({
  handleSubmit,
  defaultValues,
}) => (
  <FormWrapper
    schema={schema}
    defaultValues={defaultValues}
    onSubmit={handleSubmit}
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
