import { useState } from 'react';

export const useGallery = () => {
  const [hovered, setHovered] = useState('');
  const [imageIndex, setImageIndex] = useState<number>();

  return { hovered, setHovered, imageIndex, setImageIndex };
};
