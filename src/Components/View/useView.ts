import { useMagnifier } from 'hooks';
import { useState } from 'react';
import { ViewProps } from './type';

export const useView = ({ imageArr, index, setIndex }: ViewProps) => {
  const { onMouseEnter, onMouseLeave, onMouseMove, magnifier } = useMagnifier({
    magnifierHeight: 200,
    magnifierWidth: 200,
    zoomLevel: 1.5,
  });
  const [direction, setDirection] = useState(1);
  const image = imageArr![index];

  const turnRight = () => {
    if (index < imageArr!.length - 1) {
      setIndex((i: number) => i + 1);
    } else {
      setIndex(0);
    }
    setDirection(1);
  };

  const turnLeft = () => {
    if (index > 0) {
      setIndex((i: number) => i - 1);
    } else {
      setIndex(imageArr!.length - 1);
    }
    setDirection(-1);
  };

  return {
    image,
    direction,
    turnLeft,
    turnRight,
    onMouseEnter,
    onMouseLeave,
    onMouseMove,
    magnifier,
  };
};
