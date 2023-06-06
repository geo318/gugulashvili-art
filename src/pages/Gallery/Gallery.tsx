import { Footer, ImgLoader, Layout, Navigate } from 'Components';
import { AnimatePresence, motion } from 'framer-motion';
import { Suspense, lazy } from 'react';
import { bgFull, bgThumb } from 'assets';
import { useGallery } from './useGallery';

const View = lazy(() => import('Components/View/View'));
const Slides = lazy(() => import('pages/Gallery/Slides/Slides'));

export const Gallery = () => {
  const { hovered, setHovered, imageIndex, setImageIndex, images, close } =
    useGallery();

  return (
    <motion.div>
      <div className='fixed inset-0 bg-gradient-to-r bg-white bg-opacity-90'>
        <div className='object-cover w-full h-full scale-125 opacity-10'>
          <ImgLoader src={bgFull} thumbnail={bgThumb} alt='background' />
        </div>
        <div className='bg-black bg-opacity-5 inset-0 absolute'></div>
      </div>
      <AnimatePresence>
        {imageIndex != null && (
          <Suspense>
            <View
              index={imageIndex}
              close={close}
              turnSlide={setImageIndex}
              imageArr={images}
            />
          </Suspense>
        )}
      </AnimatePresence>
      <Layout className='select-none flex flex-col px-5 lg:px-0 relative overflow-hidden'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className='lg:pt-40 pt-20' onMouseLeave={() => setHovered('')}>
            <Suspense>
              <Slides
                imageArr={images}
                hovered={hovered}
                setHovered={setHovered}
                setImageIndex={setImageIndex}
              />
            </Suspense>
          </div>
        </motion.div>
        <Navigate link='/links' />
        <Footer />
      </Layout>
    </motion.div>
  );
};

export default Gallery;
