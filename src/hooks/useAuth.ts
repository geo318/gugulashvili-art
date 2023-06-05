import { useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { checkAuth } from 'services';

export const useAuth = ({ to = '/', back = '/' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useLayoutEffect(() => {
    (async () => {
      try {
        const res = await checkAuth();
        res.status === 200 && navigate(to);
        setIsLoading(() => false);
      } catch {
        localStorage.removeItem('token');
        navigate(back);
      }
    })();
    return () => setIsLoading(() => false);
  }, [navigate, to, back]);
  return { isLoading };
};
