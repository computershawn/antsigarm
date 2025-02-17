import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleAuth = () => {
    if (!inputs.email || !inputs.password || !inputs.confirmPassword) {
      alert('please complete all of the fields');
      return;
    }

    router.push('/');
  };

  const { email, password, confirmPassword } = inputs;

  return (
    <>
      <Box textAlign='center' border='1px solid gray' borderRadius='lg' p={4}>
        <VStack gap={4}>
          <Image src='/logo.png' h={24} cursor='pointer' alt='App logo' />
          <Input
            placeholder='Email'
            type='email'
            size='sm'
            value={email}
            onChange={(e) => {
              setInputs({ ...inputs, email: e.target.value });
            }}
          />
          <Input
            placeholder='Password'
            type='password'
            size='sm'
            value={password}
            onChange={(e) => {
              setInputs({ ...inputs, password: e.target.value });
            }}
          />
          {isLogin ? (
            <Input
              placeholder='Confirm password'
              type='password'
              size='sm'
              value={confirmPassword}
              onChange={(e) => {
                setInputs({ ...inputs, confirmPassword: e.target.value });
              }}
            />
          ) : null}

          <Button w='full' size='sm' onClick={handleAuth}>
            {isLogin ? 'Log in' : 'Sign up'}
          </Button>

          <Center my={4} gap={1} w='full'>
            <Box flex={2} h='1px' bg='gray' />
            <Text mx={1}>OR</Text>
            <Box flex={2} h='1px' bg='gray' />
          </Center>

          <Center cursor='pointer'>
            <Image src='/google.png' w={5} alt='Google logo' />
            <Text mx='2'>Log in with Google</Text>
          </Center>
        </VStack>
      </Box>
      <Box border='1px solid gray' borderRadius='lg' p={4}>
        <Center>
          <Text fontSize='sm'>
            {isLogin ? "Don't have an account?" : 'Already have an account'}
          </Text>
          <Button
            onClick={() => setIsLogin(!isLogin)}
            variant='plain'
            size='md'
            pl='0.25rem'
            pr={0}
          >
            {isLogin ? 'Sign up' : 'Log in'}
          </Button>
        </Center>
      </Box>
    </>
  );
}
