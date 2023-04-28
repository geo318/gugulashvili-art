import { print } from 'assets';

export const Button = () => {
  return (
    <button>
      <img
        src={print}
        alt=''
        className='select-none pointer-events-none w-20 -rotate-22'
      />
    </button>
  );
};
