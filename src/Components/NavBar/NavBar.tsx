import { Logout } from 'Components';
import { Link } from 'react-router-dom';

export const NavBar = ({ nextLink = '', nextLabel = 'next' }) => (
  <div className='sticky top-0 flex gap-10 items-center justify-center w-full px-10 py-5 mb-10 bg-white shadow z-40'>
    <div className='font-extrabold'>ZG</div>
    <Link to='/' className='text-blue-500 font-medium hover:underline mr-auto'>
      Home
    </Link>
    <Link
      to={nextLink}
      className='text-blue-500 font-medium hover:underline shrink-0'
    >
      {nextLabel}
    </Link>
    <Logout />
  </div>
);
