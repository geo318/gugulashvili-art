import { UploadData } from 'types';

export type Props = {
  handleSubmit: (data: UploadData) => Promise<void>;
  defaultValues: Partial<UploadData>;
};
