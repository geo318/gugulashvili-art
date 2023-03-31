import { SyntheticEvent, useState } from 'react';

export const useMagnifier = ({
  magnifierHeight = 100,
  magnifierWidth = 100,
  zoomLevel = 1.5,
}: {
  magnifierHeight?: number;
  magnifierWidth?: number;
  zoomLevel?: number;
}) => {
  const [[x, y], setXY] = useState([0, 0]);
  const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
  const [showMagnifier, setShowMagnifier] = useState(false);

  const onMouseEnter = (e: SyntheticEvent) => {
    const elem = e.currentTarget;
    const { width, height } = elem?.getBoundingClientRect();
    setSize([width, height]);
  };

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
      style={{
        display: showMagnifier ? '' : 'none',
        position: 'absolute',
        pointerEvents: 'none',
        height: `${magnifierHeight}px`,
        width: `${magnifierWidth}px`,
        top: `${y - magnifierHeight / 2}px`,
        left: `${x - magnifierWidth / 2}px`,
        opacity: '1',
        border: '1px solid lightgray',
        backgroundColor: 'white',
        backgroundImage: `url('${src}')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
        backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
        backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
        borderRadius: '100%',
      }}
    />
  );

  return { onMouseEnter, onMouseLeave, onMouseMove, magnifier };
};
