import { useQuery } from '@tanstack/react-query';
import { useEsc, useToggleBodyScroll } from 'hooks';
import { useState } from 'react';
import { getImages } from 'services';
import { ImgData } from 'types';

export const useGallery = () => {
  const { data } = useQuery({
    queryKey: ['paintings'],
    queryFn: getImages,
    retry: 1,
  });

  const [hovered, setHovered] = useState('');
  const [imageIndex, setImageIndex] = useState<number | null>();
  useToggleBodyScroll({ toggle: !!imageIndex });

  const close = () => setImageIndex(null);
  useEsc(close);

  const images: ImgData[] = data?.data || [];
  return {
    close,
    images,
    hovered,
    imageIndex,
    setHovered,
    setImageIndex,
  };
};
