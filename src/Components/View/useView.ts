import { getRatio } from 'helpers';
import { useMagnifier, useTouchScroll } from 'hooks';
import { useRef } from 'react';
import { ViewProps } from 'types';

export const useView = (props: ViewProps) => {
  const { index, imageArr } = props;
  const ref = useRef<HTMLDivElement | null>(null);

  const image = imageArr?.[index];
  const { onMouseLeave, onMouseMove, magnifier } = useMagnifier({
    magnifierHeight: 250,
    magnifierWidth: 250,
    zoomLevel: 1.8,
    width: ref.current?.clientWidth,
    ratio: getRatio(image.size),
  });

  const {
    isMobile,
    turnLeft,
    turnRight,
    direction,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
  } = useTouchScroll(props);

  return {
    ref,
    image,
    isMobile,
    turnLeft,
    magnifier,
    turnRight,
    direction,
    onMouseMove,
    onMouseLeave,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
  };
};
