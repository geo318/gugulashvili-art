import { useMagnifier, useScreenWidth } from 'hooks';
import { TouchEventHandler, useCallback, useEffect, useState } from 'react';
import { ViewProps } from './type';

export const useView = ({ imageArr, index, setIndex }: ViewProps) => {
  const isMobile = useScreenWidth();
  const { onMouseEnter, onMouseLeave, onMouseMove, magnifier } = useMagnifier({
    magnifierHeight: 200,
    magnifierWidth: 200,
    zoomLevel: 1.5,
  });
  const [direction, setDirection] = useState(1);
  const [touchPosition, setTouchPosition] = useState<number | null>();
  const [touchEnd, setTouchEnd] = useState(false);
  const [diff, setDiff] = useState(0);
  const image = imageArr![index];

  const turnRight = useCallback(() => {
    if (index < imageArr!.length - 1) {
      setIndex((i: number) => i + 1);
    } else {
      setIndex(0);
    }
    setDirection(1);
  }, [index, imageArr, setIndex]);

  const turnLeft = useCallback(() => {
    if (index > 0) {
      setIndex((i: number) => i - 1);
    } else {
      setIndex(imageArr!.length - 1);
    }
    setDirection(-1);
  }, [imageArr, index, setIndex]);

  const handleTouchEnd: TouchEventHandler<HTMLImageElement> = () => {
    setTouchEnd(true);
    console.log('ended');
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
      return;
    }
  }, [diff, touchEnd, turnLeft, turnRight]);

  return {
    image,
    turnLeft,
    magnifier,
    turnRight,
    direction,
    onMouseMove,
    onMouseEnter,
    onMouseLeave,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
  };
};
