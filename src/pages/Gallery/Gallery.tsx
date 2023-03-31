import { Footer, Layout, Navigate, View } from 'Components';
import { AnimatePresence, motion } from 'framer-motion';
import { useGallery } from './useGallery';
import { Slides } from './Slides';

export const Gallery = () => {
  const { hovered, setHovered, imageIndex, setImageIndex, close } =
    useGallery();

  return (
    <motion.div
      initial={{ backgroundColor: '#fff' }}
      animate={{ backgroundColor: '#E1EBE9' }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <AnimatePresence>
        {imageIndex != null && (
          <View index={imageIndex} close={close} setIndex={setImageIndex} />
        )}
      </AnimatePresence>
      <Layout className='select-none flex flex-col'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div onMouseLeave={() => setHovered('')}>
            <Slides
              hovered={hovered}
              setHovered={setHovered}
              setImageIndex={setImageIndex}
            />
          </div>
        </motion.div>
        <Navigate link='/links' />
        <Footer />
      </Layout>
    </motion.div>
  );
};
