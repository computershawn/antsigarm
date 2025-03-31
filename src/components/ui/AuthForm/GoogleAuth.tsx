import { Center, Image, Text } from '@chakra-ui/react';

const GoogleAuth = () => {
  return (
    <Center cursor='pointer'>
      <Image src='/google.png' w={5} alt='Google logo' />
      <Text mx='2'>Log in with Google</Text>
    </Center>
  );
};

export default GoogleAuth;
