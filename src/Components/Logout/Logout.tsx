import { useLogout } from './useLogout';

export const Logout = () => {
  const { handleLogout } = useLogout();
  return (
    <button
      className='bg-blue-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};
