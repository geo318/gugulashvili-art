import { avatar } from 'assets';

export const Home = () => (
  <div className='flex items-center justify-center flex-col pt-28 text-txt-green'>
    <h1 className='text-[3.25rem] leading-[3.25rem] font-medium'>
      Zura Gugulashvili
    </h1>
    <div className='flex text-sm gap-8 mt-5 font-normal'>
      <span>Artist</span>
      <span>January 24, 1973</span>
      <span className='underline'>zuragugulashvili73@gmail.com</span>
    </div>
    <div className='w-48 h-192 rounded-full overflow-hidden mt-[3.25rem]'>
      <img src={avatar} alt='' />
    </div>
    <p className='text-lg font-light text-txt-green-lt max-w-xs text-center mt-[3.25rem]'>
      “My artwork does not come from the process of thinking. It just comes from
      my emotions.”
    </p>
  </div>
);
