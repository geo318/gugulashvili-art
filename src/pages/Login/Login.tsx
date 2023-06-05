import { Flash, FormWrapper, Input } from 'Components';
import { useLogin } from './useLogin';
import { loginSchema as schema } from 'schema';

const Login = () => {
  const { handleLogin, setIsFlashActive, isFlashActive, flashMessage } =
    useLogin();
  return (
    <div className='flex items-start justify-center h-screen'>
      <Flash
        flashInfo={flashMessage!}
        isActive={isFlashActive}
        setIsActive={setIsFlashActive}
      />
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
            />
          </FormWrapper>
        </div>
      </div>
    </div>
  );
};

export default Login;
