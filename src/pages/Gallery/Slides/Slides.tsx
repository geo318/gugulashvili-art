import { Swiper, SwiperSlide } from 'swiper/react';
import { motion } from 'framer-motion';
import { useScreenWidth } from 'hooks';
import { SlideProps } from './type';
import { getImage, getRatio } from 'helpers';
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
        <motion.div className='flex flex-col gap-5 mb-5'>
          {imageArr.map((i, index) => (
            <motion.div
              className={`overflow-hidden max-w-full relative flex ${
                getRatio(i.size) < 1 ? 'aspect-[9/7]' : 'aspect-[7/9]'
              }`}
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
                priority={index < 6}
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
          transition={{ delay: 0.5, duration: 0.3 }}
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
                className={`duration-300 delay-500 mr-3 hover:z-50 hover:shadow-xl ${
                  index % 2 && !hovered
                    ? 'lg:min-w-[22%] min-w-full'
                    : hovered
                    ? 'lg:min-w-[20%] min-w-full mr-1'
                    : 'lg:min-w-[18%] min-w-full'
                }`}
                key={`${i.name} ${i.size}`}
              >
                <div
                  className={`w-full h-full hover:z-50 ${
                    getRatio(i.size) < 1 ? 'aspect-[9/7]' : 'aspect-[7/9]'
                  } ${
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
