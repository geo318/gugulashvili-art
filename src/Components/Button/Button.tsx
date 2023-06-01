import { print } from 'assets';

export const Button = () => (
  <button>
    <img
      src={print}
      alt=''
      className='select-none pointer-events-none w-20 -rotate-22'
    />
  </button>
);
