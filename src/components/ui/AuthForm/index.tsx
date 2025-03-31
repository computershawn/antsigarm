import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

import { Box, Button, Center, Image, Text, VStack } from '@chakra-ui/react';
import { Toaster } from '@/components/ui/toaster';

import Login from './Login';
import Signup from './Signup';
import GoogleAuth from './GoogleAuth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';

export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const [authUser] = useAuthState(auth);
  const router = useRouter();

  // Navigate to the home page if login or signup is successful
  useEffect(() => {
    if (!!authUser) {
      router.push('/');
    }
  }, [authUser, router]);

  return (
    <>
      <Toaster />
      <Box textAlign='center' border='1px solid gray' borderRadius='lg' p={4}>
        <VStack gap={4}>
          <Image src='/logo.png' h={24} cursor='pointer' alt='App logo' />
          {isLogin ? <Login /> : <Signup />}

          <Center my={4} gap={1} w='full'>
            <Box flex={2} h='1px' bg='gray' />
            <Text mx={1}>OR</Text>
            <Box flex={2} h='1px' bg='gray' />
          </Center>

          <GoogleAuth />
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
