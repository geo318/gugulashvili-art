import { useState } from 'react';
import { imgSchema } from 'schema';
import { postImageData } from 'services';
import { ImgData, UploadData } from 'types';
import { uploadInputDefaultValues as defaultValues } from 'config';

export const useUpload = () => {
  const [img, setImg] = useState<ImgData>();
  const [isUploaded, setIsUploaded] = useState(false);

  const handleDataUpload = async (data: UploadData) => {
    try {
      const res = await postImageData(data);
      const image = imgSchema.safeParse(res.data);

      if (image.success) setImg(image.data);
      setIsUploaded(() => true);
    } catch (error) {
      console.log(error);
    }
  };

  return { handleDataUpload, img, defaultValues, isUploaded, setIsUploaded };
};
