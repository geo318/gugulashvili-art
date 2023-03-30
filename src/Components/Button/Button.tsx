import { print } from 'assets';

export const Button = () => {
  return (
    <button>
      <img src={print} alt='' className='select-none pointer-events-none' />
    </button>
  );
};
