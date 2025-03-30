import { Flex, Text } from '@chakra-ui/react';
import { Avatar } from '../avatar';

export default function Comment({ createdAt, profilePic, username, text }) {
  return (
    <Flex gap={4}>
      <Avatar src={profilePic} name={username} size='sm' />
      <Flex direction='column'>
        <Flex gap={2}>
          <Text color='white' fontWeight='bold' fontSize={12}>
            {username}
          </Text>
          <Text color='white' fontSize={14}>
            {text}
          </Text>
        </Flex>
        <Text color='gray' fontSize={12}>
          {createdAt}
        </Text>
      </Flex>
    </Flex>
  );
}
