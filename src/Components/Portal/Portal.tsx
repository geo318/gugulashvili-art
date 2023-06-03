import { FC } from 'react';
import { createPortal } from 'react-dom';
import { Props } from 'types';
import { usePortal } from './usePortal';

const Portal: FC<Props & { className?: string[] }> = ({
  children,
  className,
}) => {
  const { mounted, ref } = usePortal({ className });
  return mounted && ref.current
    ? createPortal(<div>{children}</div>, ref.current)
    : null;
};

export default Portal;
