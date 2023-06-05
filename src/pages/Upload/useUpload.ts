import { useState } from 'react';
import { postImageData } from 'services';
import { UploadData } from 'types';
import { uploadInputDefaultValues as defaultValues } from 'config';
import { useAuth } from 'hooks/useAuth';
import { useFlashMessage } from 'Components';

export const useUpload = () => {
  const { isLoading } = useAuth({ to: '', back: '/login' });
  const [isUploaded, setIsUploaded] = useState(false);

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
    isLoading,
    isUploaded,
    flashMessage,
    defaultValues,
    isFlashActive,
    setIsUploaded,
    setIsFlashActive,
    handleDataUpload,
  };
};
