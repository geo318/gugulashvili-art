import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideProps } from './type';
import { thumbnails, imageArr as slideData, imageArr, images } from 'assets';
import { motion } from 'framer-motion';
import { useScreenWidth } from 'hooks';

export const Slides = ({ hovered, setHovered, setImageIndex }: SlideProps) => {
  const isMobile = useScreenWidth();
  return (
    <>
      {isMobile ? (
        <motion.div className='flex flex-col gap-5 mb-10'>
          {slideData.map((i, index) => (
            <motion.div
              className='overflow-hidden max-w-full relative flex'
              key={i.key}
              onMouseOver={() => setHovered(`${index}`)}
              onClick={() => {
                setImageIndex(index);
                setHovered('');
              }}
              initial={{ opacity: 0, translateY: '100' }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: '100' }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <img
                src={thumbnails[i.key]}
                alt={i.info}
                className='w-full h-full max-w-full object-fit relative'
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
            className='pt-28 lg:px-28'
            slidesPerView={5}
            grabCursor
            longSwipes
            slidesOffsetAfter={800}
          >
            {slideData.map((i, index) => (
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
                  className={`w-full h-full ${
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
                  <img
                    src={thumbnails[i.key]}
                    alt={i.info}
                    className='w-full h-full aspect-6/5 object-cover'
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      )}
      <div className='hidden'>
        {imageArr.map((i) => (
          <img
            src={images[i.key]}
            alt='images.name'
            key={`${i.key}-pre`}
            role='presentation'
            loading='lazy'
            decoding='async'
          />
        ))}
      </div>
    </>
  );
};
