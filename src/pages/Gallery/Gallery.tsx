import { Swiper, SwiperSlide } from 'swiper/react';
import { Layout } from 'Components';
import { images } from 'assets';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { View } from './View';
import { useGallery } from './useGallery';

export const Gallery = () => {
  const { hovered, setHovered, imageIndex, setImageIndex } = useGallery();

  return (
    <>
      {imageIndex && <View images={images} index={imageIndex} />}
      <motion.div
        className='bg-app-gradient absolute inset-0'
        initial={{ opacity: 0, y: '0' }}
        animate={{ opacity: 1, y: '-100vh' }}
        transition={{ duration: 0.8 }}
      />
      <Layout className='bg-[#E1EBE9]'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <Layout>
            <div onMouseLeave={() => setHovered('')}>
              <Swiper className='pt-20' slidesPerView={5} grabCursor longSwipes>
                {images.map((i, index) => (
                  <SwiperSlide
                    className={
                      index % 2 && !hovered
                        ? 'min-w-[22%]'
                        : hovered
                        ? 'min-w-[22%]'
                        : 'min-w-[18%]'
                    }
                    key={index}
                  >
                    <div
                      className={`${
                        hovered === `${index}`
                          ? 'active'
                          : !hovered
                          ? ''
                          : 'passive'
                      } overflow-hidden`}
                      onMouseOver={() => setHovered(`${index}`)}
                      onClick={() => setImageIndex(index)}
                    >
                      <img src={i.painting} alt='' className='' />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </Layout>
        </motion.div>
      </Layout>
    </>
  );
};
