import { useMagnifier } from 'hooks';
import { TouchEventHandler, useState } from 'react';
import { ViewProps } from './type';

export const useView = ({ imageArr, index, setIndex }: ViewProps) => {
  const { onMouseEnter, onMouseLeave, onMouseMove, magnifier } = useMagnifier({
    magnifierHeight: 200,
    magnifierWidth: 200,
    zoomLevel: 1.5,
  });
  const [direction, setDirection] = useState(1);
  const [touchPosition, setTouchPosition] = useState<number | null>();

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

  const handleTouchStart: TouchEventHandler<HTMLImageElement> = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };
  const handleTouchMove: TouchEventHandler<HTMLImageElement> = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown && touchDown - currentTouch;

    if (diff && diff > 5) {
      turnRight();
    }

    if (diff && diff < -5) {
      turnLeft();
    }
    setTouchPosition(null);
  };

  return {
    image,
    turnLeft,
    magnifier,
    turnRight,
    direction,
    onMouseMove,
    onMouseEnter,
    onMouseLeave,
    handleTouchMove,
    handleTouchStart,
  };
};
