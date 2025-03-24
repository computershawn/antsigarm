import { Box, Flex, Text, VStack } from '@chakra-ui/react';

import { ChakraNextLink as Link } from '../ChakraNextLink';
import SuggestedUser from './SuggestedUser';
import SuggestedUsersHeader from './SuggestedUsersHeader';

export default function SuggestedUserList() {
  const list = [
    {
      name: 'Dan Abramov',
      followers: 20,
      avatar: 'https://bit.ly/dan-abramov',
    },
    {
      name: 'Ryan Florence',
      followers: 40,
      avatar: 'https://bit.ly/ryan-florence',
    },
    {
      name: 'Christian Nwamba',
      followers: 60,
      avatar: 'https://bit.ly/code-beast',
    },
  ];

  return (
    <VStack py={10}>
      <SuggestedUsersHeader />
      <Flex align='center' justify='space-between' w='full'>
        <Text fontSize={12} fontWeight='bold' color='gray'>
          Suggested for you
        </Text>
        <Text
          fontSize={12}
          fontWeight='700'
          color='gray'
          _hover={{ color: 'darkgray' }}
        >
          See All
        </Text>
      </Flex>
      {list.map((user) => (
        <SuggestedUser
          name={user.name}
          followers={user.followers}
          avatar={user.avatar}
        />
      ))}
      <Box alignSelf='flex-start' fontSize={12} color='gray' mt={5}>
        © 2025 Built By{' '}
        <Link link='https://github.com/computershawn' external>
          computershawn
        </Link>
      </Box>
    </VStack>
  );
}
