import { Box, Container, Flex, HStack, Image, VStack } from '@chakra-ui/react';
import AuthForm from '../../components/ui/AuthForm';

export default function AuthPage() {
  return (
    <Flex minH='100vh' justify='center' align='center' px='4'>
      <HStack>
        {/* Left-hand side */}
        <Box display={{ base: 'none', md: 'block' }}>
          <Image src='/auth.png' h={650} alt='Phone image' />
        </Box>

        {/* Right-hand side */}
        <VStack gap={4} align='stretch'>
          <AuthForm />
          <Box textAlign='center'>Get the app.</Box>
          <Flex gap={5} justify='center'>
            <Image src='/playstore.png' h={10} alt='Play Store logo' />
            <Image src='/microsoft.png' h={10} alt='Microsoft logo' />
          </Flex>
        </VStack>
      </HStack>
    </Flex>
  );
}
