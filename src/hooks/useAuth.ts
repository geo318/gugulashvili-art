import { useLayoutEffect } from 'react';
import { useNavigate } from 'react-router';
import { checkAuth } from 'services';

export const useAuth = ({ to = '/', back = '/' }) => {
  const navigate = useNavigate();

  useLayoutEffect(() => {
    try {
      const check = async () => {
        const res = await checkAuth();
        res.status === 200 && navigate(to);
      };
      check();
    } catch {
      localStorage.removeItem('token');
      navigate(back);
    }
  }, [navigate, to, back]);
};
