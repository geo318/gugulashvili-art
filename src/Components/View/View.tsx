import { ViewProps } from './type';
import { motion, AnimatePresence } from 'framer-motion';
import { Arrow } from 'Components/icons';
import { useView } from './useView';
import { imageArr } from 'assets';
import { useEsc } from 'hooks';

export const View: React.FC<ViewProps> = ({ index, close, setIndex }) => {
  const {
    image,
    direction,
    turnLeft,
    turnRight,
    magnifier,
    onMouseMove,
    onMouseLeave,
    onMouseEnter,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
  } = useView({
    imageArr,
    index,
    setIndex,
  });

  return (
    <div className='w-full flex justify-center items-center'>
      <motion.div
        className='bg-black bg-opacity-70 fixed inset-0 z-20'
        initial={{ opacity: 0, y: '-100vh' }}
        animate={{ opacity: 1, y: '0' }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0, y: '-100vh' }}
        onClick={close}
      />
      <motion.div
        className='fixed z-50 lg:top-28 top-5'
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        exit={{ opacity: 0, scale: 0.5 }}
      >
        <div className='h-full w-full max-w-[50rem]'>
          <div className='px-2 pt-2 lg:bg-white'>
            <AnimatePresence
              mode='popLayout'
              custom={direction}
              initial={false}
            >
              <motion.img
                src={image?.painting}
                className='w-full h-full flex max-h-[75vh]'
                initial={{ x: direction > 0 ? 500 : -500, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: direction > 0 ? -500 : 500, opacity: 0 }}
                transition={{ duration: 0.5 }}
                custom={direction}
                key={image?.painting}
                alt={image?.name}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                onMouseMove={onMouseMove}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                onTouchMove={handleTouchMove}
              />
            </AnimatePresence>
            {magnifier(image?.painting)}
            <figure className='text-xs leading-5 font-medium flex lg:gap-8 py-4 lg:text-black text-white lg:flex-row flex-col gap-2'>
              <span>{`${image.name}, ${image.year}`}</span>
              <span>{`${image.info}`}</span>
              <span>{`${image.size}`}</span>
              <div className='ml-auto flex gap-5'>
                <button className='pl-2' onClick={turnLeft}>
                  <Arrow left />
                </button>
                <button className='pr-2' onClick={turnRight}>
                  <Arrow />
                </button>
              </div>
            </figure>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
