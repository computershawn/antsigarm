import { useLogin } from '@/hooks/useLogin';
import { Alert, Button, Input } from '@chakra-ui/react';
import { useState } from 'react';
import { toaster } from '../toaster';

const onErrorCallback = (errMsg) => {
  toaster.create({
    description: errMsg,
    type: 'error',
  });
};

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });

  const { loading, error, login } = useLogin();

  return (
    <>
      <Input
        placeholder='Email'
        type='email'
        size='sm'
        value={inputs.email}
        onChange={(e) => {
          setInputs({ ...inputs, email: e.target.value });
        }}
      />
      <Input
        placeholder='Password'
        type='password'
        size='sm'
        value={inputs.password}
        onChange={(e) => {
          setInputs({ ...inputs, password: e.target.value });
        }}
      />

      {error && (
        <Alert.Root size='sm' status='error' title='Something went wrong'>
          <Alert.Indicator />
          <Alert.Title>Something went wrong</Alert.Title>
        </Alert.Root>
      )}

      <Button w='full' size='sm' onClick={() => login(inputs, onErrorCallback)}>
        Log in
      </Button>
    </>
  );
};

export default Login;
