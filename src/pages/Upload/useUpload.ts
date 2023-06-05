import { useState } from 'react';
import { postImageData } from 'services';
import { UploadData } from 'types';
import { uploadInputDefaultValues as defaultValues } from 'config';
import { useAuth } from 'hooks/useAuth';
import { useFlashMessage } from 'Components';

export const useUpload = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  useAuth({ to: '', back: '/login' });

  const { flashMessage, handleFlashMessage, isFlashActive, setIsFlashActive } =
    useFlashMessage();

  const handleDataUpload = async (data: UploadData) => {
    try {
      await postImageData(data);
      handleFlashMessage();
      setIsUploaded(() => true);
    } catch {
      handleFlashMessage(!!'error');
    }
  };

  return {
    isUploaded,
    flashMessage,
    defaultValues,
    isFlashActive,
    setIsUploaded,
    setIsFlashActive,
    handleDataUpload,
  };
};
