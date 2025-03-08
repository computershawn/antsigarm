import { Avatar, Flex, Text } from '@chakra-ui/react';
import { ChakraNextLink as Link } from '../ChakraNextLink';

export default function SuggestedUsersHeader({ username, avatar }) {
  return (
    <Flex justify='space-between' align='center' w='full' my={2}>
      <Flex align='center' gap={2}>
        <Avatar.Root size='2xs'>
          <Avatar.Fallback name='shawn j' />
          <Avatar.Image src='./img1.png' />
        </Avatar.Root>

        <Text fontSize={12} fontWeight='bold'>
          shawn j
        </Text>
      </Flex>
      <Link
        link='/auth'
        styles={{
          fontSize: 12,
          fontWeight: 'medium',
          color: 'blue',
          cursor: 'pointer',
          textDecoration: 'none',
        }}
      >
        Logout
      </Link>
    </Flex>
  );
}
