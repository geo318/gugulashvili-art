import { useEsc, useToggleBodyScroll } from 'hooks';
import { useState } from 'react';

export const useGallery = () => {
  const [hovered, setHovered] = useState('');
  const [imageIndex, setImageIndex] = useState<number | null>();
  useToggleBodyScroll({ toggle: !!imageIndex });

  const close = () => setImageIndex(null);
  useEsc(close);

  return { hovered, setHovered, imageIndex, setImageIndex, close };
};
