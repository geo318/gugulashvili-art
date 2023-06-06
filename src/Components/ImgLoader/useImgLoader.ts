import { useState } from 'react';

export const useImgLoader = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const handleImageLoad = () => {
    setIsLoaded(true);
  };
  return { isLoaded, handleImageLoad };
};
