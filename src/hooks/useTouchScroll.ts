import { TouchEventHandler, useCallback, useEffect, useState } from 'react';
import { useScreenWidth } from './useScreenWidth';
import { ViewProps } from 'types';

export const useTouchScroll = ({ imageArr, index, turnSlide }: ViewProps) => {
  const [direction, setDirection] = useState(1);
  const [touchPosition, setTouchPosition] = useState<number | null>();
  const [touchEnd, setTouchEnd] = useState(false);
  const [diff, setDiff] = useState(0);
  const isMobile = useScreenWidth();

  const turnRight = useCallback(() => {
    if (index < imageArr?.length - 1) {
      turnSlide((i: number) => i + 1);
    } else {
      turnSlide(0);
    }
    setDirection(1);
  }, [index, imageArr, turnSlide]);

  const turnLeft = useCallback(() => {
    if (index > 0) {
      turnSlide((i: number) => i - 1);
    } else {
      turnSlide(imageArr?.length - 1);
    }
    setDirection(-1);
  }, [imageArr, index, turnSlide]);

  const handleTouchEnd: TouchEventHandler<HTMLImageElement> = () => {
    setTouchEnd(true);
  };

  const handleTouchStart: TouchEventHandler<HTMLImageElement> = (e) => {
    setTouchEnd(false);
    if (!isMobile) return;
    const touchDown = e.touches[0].clientX;
    touchDown && setTouchPosition(() => touchDown);
  };
  const handleTouchMove: TouchEventHandler<HTMLImageElement> = (e) => {
    setTouchEnd(false);
    if (!isMobile) return;
    const touchDown = touchPosition;
    if (touchDown === null) return;

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown && touchDown - currentTouch;
    diff && setDiff(diff);
  };

  useEffect(() => {
    if (touchEnd && diff && diff > 10) {
      turnRight();
      setTouchPosition(null);
      setDiff(0);
      return;
    }

    if (touchEnd && diff && diff < -10) {
      turnLeft();
      setTouchPosition(null);
      setDiff(0);
    }
  }, [diff, touchEnd, turnLeft, turnRight]);

  return {
    isMobile,
    turnLeft,
    turnRight,
    direction,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
  };
};
