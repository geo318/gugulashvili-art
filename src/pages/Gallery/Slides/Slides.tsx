import { Swiper, SwiperSlide } from 'swiper/react';
import { SlideProps } from './type';
import { slideData } from './data';
import { images } from 'assets';
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
              initial={{ opacity: 0, top: '-100vh' }}
              animate={{ opacity: 1, top: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={images[i.key]}
                alt={i.info}
                className='w-full h-full max-w-full object-fit relative'
              />
            </motion.div>
          ))}
        </motion.div>
      ) : (
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
              key={i.name}
            >
              <div
                className={`w-full h-full ${
                  hovered === `${index}` ? 'active' : !hovered ? '' : 'passive'
                } overflow-hidden`}
                onMouseOver={() => setHovered(`${index}`)}
                onClick={() => {
                  setImageIndex(index);
                  setHovered('');
                }}
              >
                <img
                  src={images[i.key]}
                  alt={i.info}
                  className='w-full h-full aspect-6/5 object-cover'
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};
