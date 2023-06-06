import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { useScreenWidth } from 'hooks';
import { SlideProps } from './type';
import { getImage } from 'helpers';
import { ImgLoader } from 'Components';

export const Slides = ({
  hovered,
  imageArr,
  setHovered,
  setImageIndex,
}: SlideProps) => {
  const isMobile = useScreenWidth();

  return (
    <>
      {isMobile ? (
        <motion.div className='flex flex-col gap-5 mb-0'>
          {imageArr.map((i, index) => (
            <motion.div
              className='overflow-hidden max-w-full relative flex'
              key={i._id}
              onMouseOver={() => setHovered(`${index}`)}
              onClick={() => {
                setImageIndex(index);
                setHovered('');
              }}
              initial={{ opacity: 0, translateY: '100' }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: '100' }}
              transition={{ duration: 0.2, delay: 0.2 }}
            >
              <ImgLoader
                src={getImage(i.image.fullSize)}
                thumbnail={getImage(i.image.thumbnail)}
                alt={i.name}
              />
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.5, translateX: '20vw' }}
          animate={{
            opacity: 1,
            scale: 1,
            translateX: 0,
          }}
          exit={{ opacity: 0, scale: 0.5, translateX: '20vw' }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Swiper
            className='pt-0 lg:px-28'
            slidesPerView={5}
            grabCursor
            longSwipes
            slidesOffsetAfter={800}
          >
            {imageArr.map((i, index) => (
              <SwiperSlide
                className={`${
                  index % 2 && !hovered
                    ? 'lg:min-w-[22%] min-w-full'
                    : hovered
                    ? 'lg:min-w-[20%] min-w-full'
                    : 'lg:min-w-[18%] min-w-full'
                }`}
                key={`${i.name} ${i.size}`}
              >
                <div
                  className={`w-full h-full aspect-[7/5] ${
                    hovered === `${index}`
                      ? 'active'
                      : !hovered
                      ? ''
                      : 'passive'
                  } overflow-hidden`}
                  onMouseOver={() => setHovered(`${index}`)}
                  onClick={() => {
                    setImageIndex(index);
                    setHovered('');
                  }}
                >
                  <ImgLoader
                    src={getImage(i.image.fullSize)}
                    thumbnail={getImage(i.image.thumbnail)}
                    alt={i.name}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      )}
    </>
  );
};

export default Slides;
