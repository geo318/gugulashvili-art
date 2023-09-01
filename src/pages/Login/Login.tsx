import { Flash, FormWrapper, Input, Spinner } from 'Components';
import { useLogin } from './useLogin';
import { loginSchema as schema } from 'schema';

const Login = () => {
  const {
    isLoading,
    handleLogin,
    flashMessage,
    isFlashActive,
    setIsFlashActive,
  } = useLogin();

  return (
    <div className='flex items-start justify-center h-screen'>
      <Flash
        flashInfo={flashMessage!}
        isActive={isFlashActive}
        setIsActive={setIsFlashActive}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <div className='bg-white shadow-md rounded px-8 py-6 mt-28'>
          <h2 className='text-2xl font-bold mb-6'>Login</h2>
          <div className='mb-4'>
            <FormWrapper
              schema={schema}
              onSubmit={handleLogin}
              className='bg-white'
              buttonLabel='Login'
            >
              <Input
                name='username'
                placeholder='Enter your username'
                label='Username'
              />
              <Input
                name='password'
                placeholder='Enter your password'
                label='Password'
                type='password'
              />
            </FormWrapper>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
