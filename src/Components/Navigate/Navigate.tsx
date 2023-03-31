import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from 'Components/Button';

export const Navigate = ({ link }: { link: string }) => {
  return (
    <div className='flex mt-auto lg:justify-end justify-center text-center lg:mb-10 mb-2'>
      <Link
        to={link}
        className='lg:mr-16 mt-auto hover:opacity-80 hover:scale-105 active:scale-95 transition-all duration-300'
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
  );
};
