import { Box, Flex, Text } from '@chakra-ui/react';
import { Avatar } from '../avatar';

export default function PostHeader({ username, avatar }) {
  return (
    <Flex justify='space-between' align='center' w='full' my={2}>
      <Flex align='center' gap={2}>
        <Avatar size='2xs' name={username} src={avatar} />
        <Flex fontSize={12} fontWeight='bold' gap={1}>
          {username}
          <Box color='gray'>⋅</Box>
          <Box color='gray'>1w</Box>
        </Flex>
      </Flex>
      <Box cursor='pointer'>
        <Text
          fontSize={12}
          color='blue.500'
          fontWeight='bold'
          _hover={{ color: 'black' }}
          transition='0.2s ease-in-out'
        >
          Unfollow
        </Text>
      </Box>
    </Flex>
  );
}
