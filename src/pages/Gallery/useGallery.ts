import { useToggleBodyScroll } from 'hooks';
import { useState } from 'react';

export const useGallery = () => {
  const [hovered, setHovered] = useState('');
  const [imageIndex, setImageIndex] = useState<number | null>();
  useToggleBodyScroll({ toggle: !!imageIndex });

  const close = () => setImageIndex(null);

  return { hovered, setHovered, imageIndex, setImageIndex, close };
};
