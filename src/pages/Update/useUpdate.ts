import { useQuery } from '@tanstack/react-query';
import { useFlashMessage } from 'Components';
import { useEsc, useToggleBodyScroll } from 'hooks';
import { useAuth } from 'hooks/useAuth';
import { useState } from 'react';
import { getImages } from 'services';
import { ImgData } from 'types';

export const useUpdate = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImgData>();
  const { isFlashActive, setIsFlashActive, flashMessage, handleFlashMessage } =
    useFlashMessage();
  useAuth({ to: '', back: '/login' });
  useEsc(() => setIsModalOpen(false));
  useToggleBodyScroll({ toggle: isModalOpen });

  const { isLoading, data, refetch } = useQuery({
    queryKey: ['paintings'],
    queryFn: getImages,
    retry: 1,
  });

  const toggleModal = () => setIsModalOpen((prev) => !prev);
  const handleImageSelect = (image: ImgData) => {
    setSelectedImage(image);
    toggleModal();
  };
  const images: ImgData[] = data?.data || [];

  return {
    images,
    refetch,
    isLoading,
    isModalOpen,
    toggleModal,
    flashMessage,
    isFlashActive,
    selectedImage,
    setIsFlashActive,
    handleImageSelect,
    handleFlashMessage,
  };
};
