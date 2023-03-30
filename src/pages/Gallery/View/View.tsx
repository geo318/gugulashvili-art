import { ViewProps } from './type';

export const View: React.FC<ViewProps> = ({ images, index }) => {
  return (
    <>
      <div className='bg-black bg-opacity-70 fixed inset-0 z-20' />
      <div className='fixed w-full flex justify-center items-center z-50 top-28'>
        <div className='h-full w-full max-w-[55rem]'>
          <img src={images[index]?.painting} alt='' className='w-full h-full' />
        </div>
      </div>
    </>
  );
};
