import { useFlashMessage } from 'Components';
import { useAuth } from 'hooks/useAuth';
import { useNavigate } from 'react-router';
import { login } from 'services';
import { LoginProps } from 'types';

export const useLogin = () => {
  const navigate = useNavigate();
  const { isLoading } = useAuth({ to: '/upload', back: '/login' });

  const { flashMessage, handleFlashMessage, isFlashActive, setIsFlashActive } =
    useFlashMessage('invalid credentials');

  const handleLogin = async (auth: LoginProps) => {
    try {
      const res = await login(auth);
      localStorage.setItem('token', res.data.token);
      handleFlashMessage();
      res.status === 200 && navigate('/upload');
    } catch {
      handleFlashMessage(!!'error');
    }
  };
  return {
    isLoading,
    handleLogin,
    flashMessage,
    isFlashActive,
    setIsFlashActive,
  };
};
