import { motion, AnimatePresence } from 'framer-motion';
import { Arrow, ImgLoader } from 'Components';
import { useView } from './useView';
import { ViewProps } from 'types';
import { getImage, getRatio } from 'helpers';

export const View: React.FC<ViewProps & { close: () => void }> = ({
  index,
  close,
  imageArr,
  turnSlide,
}) => {
  const {
    ref,
    image,
    turnLeft,
    direction,
    turnRight,
    magnifier,
    onMouseMove,
    onMouseLeave,
    handleTouchEnd,
    handleTouchMove,
    handleTouchStart,
  } = useView({
    index,
    turnSlide,
    imageArr,
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
        {image && (
          <div
            className={`h-full max-w-full mx-auto ${
              getRatio(image.size) < 1 ? 'w-[50rem]' : 'w-[30rem]'
            }`}
          >
            <div className='px-2 pt-2 lg:bg-white' ref={ref}>
              <div>
                <AnimatePresence
                  custom={direction}
                  initial={false}
                  mode='popLayout'
                >
                  <motion.div
                    className={`flex flex-row flex-nowrap ${
                      getRatio(image.size) < 1 ? 'aspect-[7/5]' : 'aspect-[5/7]'
                    }`}
                    key={image._id}
                    initial={{ x: direction > 0 ? 500 : -500, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction > 0 ? -500 : 500, opacity: 0 }}
                    custom={direction}
                    onMouseLeave={onMouseLeave}
                    onMouseMove={onMouseMove}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                    onTouchMove={handleTouchMove}
                  >
                    <ImgLoader
                      src={getImage(image.image.fullSize)}
                      thumbnail={getImage(image.image.thumbnail)}
                      alt={image.name}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {magnifier(getImage(image.image.fullSize))}
              <figure className='w-full text-xs leading-5 font-medium flex lg:gap-8 py-4 lg:text-black text-white lg:flex-row flex-col gap-2'>
                <span>{`${image.name}, ${image.year}`}</span>
                <span>{`${image.description}`}</span>
                <span>{`${image.size}`}</span>
                <div className='ml-auto lg:flex gap-5 hidden'>
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
        )}
      </motion.div>
    </div>
  );
};

export default View;
