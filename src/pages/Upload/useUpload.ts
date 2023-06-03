import { useState } from 'react';
import { imgSchema } from 'schema';
import { postImageData } from 'services';
import { ImgData, UploadData } from 'types';
import { uploadInputDefaultValues as defaultValues } from 'config';

export const useUpload = () => {
  const [img, setImg] = useState<ImgData>();
  const handleDataUpload = async (data: UploadData) => {
    try {
      const res = await postImageData(data);
      const image = imgSchema.parse(res.data);
      setImg(image);
    } catch (error) {
      console.log(error);
    }
  };

  return { handleDataUpload, img, defaultValues };
};
