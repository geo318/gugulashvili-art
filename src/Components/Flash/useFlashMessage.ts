import { useState } from 'react';

export const useFlashMessage = () => {
  const [isFlashActive, setIsFlashActive] = useState(false);
  const [fleshMessage, setFlashMessage] = useState<{
    message: string;
    error: boolean;
  }>();

  const handleFlashMessage = (error = false) => {
    const message = error ? 'Something went wrong...' : 'Success!...';
    setFlashMessage({ message, error });
    setIsFlashActive(true);
  };

  return { isFlashActive, setIsFlashActive, fleshMessage, handleFlashMessage };
};
