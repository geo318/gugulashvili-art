import { postImageData } from 'services/services';
import { UploadData } from 'types';

export const useUpload = () => {
  const handleDataUpload = async (data: UploadData) => {
    try {
      const res = await postImageData(data);
      console.log(res.data, 'data');
    } catch (error) {
      console.log(error);
    }
  };

  return { handleDataUpload };
};
