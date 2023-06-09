import { SyntheticEvent, useState } from 'react';

export const useMagnifier = ({
  magnifierHeight = 100,
  magnifierWidth = 100,
  zoomLevel = 1.5,
  width = 800,
  ratio = 5 / 7,
}) => {
  const [[x, y], setXY] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  const onMouseLeave = () => {
    setShowMagnifier(false);
  };

  const onMouseMove = (e: SyntheticEvent) => {
    setShowMagnifier(true);
    const elem = e.currentTarget;
    const { top, left } = elem.getBoundingClientRect();
    const x = (e as unknown as MouseEvent).pageX - left - window.pageXOffset;
    const y = (e as unknown as MouseEvent).pageY - top - window.pageYOffset;
    setXY([x, y]);
  };

  const magnifier = (src: string) => (
    <div
      className='lg:block hidden absolute pointer-events-none bg-white bg-no-repeat rounded-full'
      style={{
        display: showMagnifier ? '' : 'none',
        height: `${magnifierHeight}px`,
        width: `${magnifierWidth}px`,
        top: `${y - magnifierHeight / 2}px`,
        left: `${x - magnifierWidth / 2}px`,
        border: '1px solid lightgray',
        backgroundImage: `url('${src}')`,
        backgroundSize: `${width * zoomLevel}px ${width * ratio * zoomLevel}px`,
        backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
        backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
      }}
    />
  );

  return { onMouseLeave, onMouseMove, magnifier };
};
