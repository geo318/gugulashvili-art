import { Footer, Layout, Navigate } from 'Components';
import { motion } from 'framer-motion';

export const Links = () => {
  return (
    <motion.div
      initial={{ backgroundColor: '#fff' }}
      animate={{ backgroundColor: '#E1EBE9' }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <Layout className='select-none flex flex-col h-full'>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='flex flex-col h-full'
        >
          <div className='mb-auto'>links</div>
          <Navigate link='/' />
          <Footer />
        </motion.div>
      </Layout>
    </motion.div>
  );
};
