import { avatar } from 'assets';
import { Layout, Button } from 'Components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Home = () => (
  <Layout className='overflow-hidden'>
    <motion.div
      className='bg-app-gradient'
      initial={{ opacity: 0, y: '-100vh' }}
      animate={{ opacity: 1, y: '0' }}
      transition={{ duration: 0.8 }}
    >
      <Layout className='pt-28 text-txt-green'>
        <motion.div
          className='flex items-center justify-center flex-col'
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <h1 className='text-[3.25rem] leading-[3.25rem] font-medium'>
            Zura Gugulashvili
          </h1>
          <div className='flex text-sm gap-8 mt-5 font-normal'>
            <span>Artist</span>
            <span>January 24, 1973</span>
            <span className='underline'>zuragugulashvili73@gmail.com</span>
          </div>
          <motion.div
            className='w-48 h-192 rounded-full overflow-hidden mt-[3.25rem] hover:cursor-grab active:cursor-grabbing'
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          >
            <img
              src={avatar}
              alt=''
              className='select-none pointer-events-none'
            />
          </motion.div>
          <p className='text-lg font-light text-txt-green-lt max-w-xs text-center mt-[3.25rem]'>
            “My artwork does not come from the process of thinking. It just
            comes from my emotions.”
          </p>
        </motion.div>
        <div className='flex mt-32 justify-end'>
          <Link
            to='/gallery'
            className='mr-16 opacity-50 hover:opacity-80 hover:scale-105 active:scale-95 transition-all duration-300'
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.5 }}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <Button />
            </motion.div>
          </Link>
        </div>
      </Layout>
    </motion.div>
  </Layout>
);
