import { avatar } from 'assets';
import { Layout, Footer, Navigate } from 'Components';
import { motion } from 'framer-motion';

export const Home = () => (
  <Layout className='overflow-hidden'>
    <motion.div
      className='bg-app-gradient h-screen overflow-hidden'
      initial={{ opacity: 0, y: '-20vh' }}
      animate={{ opacity: 1, y: '0' }}
      exit={{ opacity: 0, y: '-20vh' }}
      transition={{ duration: 0.5 }}
    >
      <div className='lg:pt-32 pt-16 text-txt-green flex flex-col h-full'>
        <motion.div
          className='flex items-center justify-center flex-col'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <motion.div
            className='relative w-48 h-192 rounded-full overflow-hidden lg:mt-[3.25rem] lg:mb-[2rem] my-[2rem] hover:cursor-grab active:cursor-grabbing'
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            drag
            dragConstraints={{
              left: 0,
              right: 0,
              top: 0,
              bottom: 0,
            }}
          >
            <div className='absolute inset-0 bg-green-500 bg-opacity-10' />
            <img
              src={avatar}
              alt=''
              className='select-none pointer-events-none'
            />
          </motion.div>
          <h1 className='text-[2rem] leading-[2rem] lg:text-[3.25rem] lg:leading-[3.25rem] font-medium mb-10'>
            Zura Gugulashvili
          </h1>
          <p className='text-lg font-light text-txt-green-lt max-w-xs text-center'>
            “My artwork does not come from the process of thinking. It just
            comes from my emotions.”
          </p>
        </motion.div>
        <Navigate link='/gallery' opacity={0.4} />
        <Footer />
      </div>
    </motion.div>
  </Layout>
);
export default Home;
