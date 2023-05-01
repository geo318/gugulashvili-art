import { Footer, Layout, Navigate } from 'Components';
import { AnimatePresence, motion } from 'framer-motion';
import { useGallery } from './useGallery';
import { Suspense, lazy } from 'react';
const View = lazy(() => import('Components/View/View'));
const Slides = lazy(() => import('pages/Gallery/Slides/Slides'));

export const Gallery = () => {
  const { hovered, setHovered, imageIndex, setImageIndex, close } =
    useGallery();

  return (
    <motion.div>
      <AnimatePresence>
        {imageIndex != null && (
          <Suspense>
            <View index={imageIndex} close={close} setIndex={setImageIndex} />
          </Suspense>
        )}
      </AnimatePresence>
      <Layout className='select-none flex flex-col px-5 lg:px-0 relative overflow-hidden'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className='lg:pt-28 pt-10' onMouseLeave={() => setHovered('')}>
            <Suspense>
              <Slides
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
