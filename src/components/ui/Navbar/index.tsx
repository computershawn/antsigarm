import { Button, Container, Flex, Image } from '@chakra-ui/react';
import { CONT_LG } from '@/constants';

import { ChakraNextLink } from '../ChakraNextLink';

const Navbar = () => (
  <Container my={4} maxW={CONT_LG}>
    <Flex
      w='full'
      justify={{ base: 'center', sm: 'space-between' }}
      align='center'
    >
      <Image
        src='/logo.png'
        h={20}
        display={{ base: 'none', sm: 'block' }}
        cursor='pointer'
        alt='antsigarm logo'
      />
      <Flex gap={4}>
        <Button asChild size='sm'>
          <ChakraNextLink link='/'>Login</ChakraNextLink>
        </Button>
        <Button asChild variant='outline' size='sm'>
          <ChakraNextLink link='/'>Signup</ChakraNextLink>
        </Button>
      </Flex>
    </Flex>
  </Container>
);

export default Navbar;
