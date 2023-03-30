import { Props } from 'types';

export const Layout: React.FC<Props> = ({ children, className = '' }) => {
  return (
    <div className={`${className} min-h-screen w-screen bg-no-repeat`}>
      {children}
    </div>
  );
};
