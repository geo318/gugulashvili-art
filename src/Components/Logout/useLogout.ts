import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router';

export const useLogout = () => {
  useAuth({ to: '', back: '/login' });
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };
  return { handleLogout };
};
