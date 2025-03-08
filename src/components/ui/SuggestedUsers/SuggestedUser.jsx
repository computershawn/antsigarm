import { useState } from 'React';

import { Box, Button, Flex, VStack } from '@chakra-ui/react';
import { Avatar } from '../avatar';

export default function SuggestedUser({ name, followers, avatar }) {
  const [isFollowed, setIsFollowed] = useState(false);

  const handleClickFollow = () => {
    setIsFollowed(!isFollowed);
  };

  return (
    <>
      <Flex justify='space-between' align='center' width='full'>
        <Flex align='center' gap={2}>
          <Avatar src={avatar} size='md' />
          <VStack gap={1} align='flex-start'>
            <Box fontSize={12} fontWeight='bold'>
              {name}
            </Box>
            <Box fontSize={11} color='gray'>
              {followers} followers
            </Box>
          </VStack>
        </Flex>
        <Button p={0} size='sm' variant='link' onClick={handleClickFollow}>
          {isFollowed ? 'Unfollow' : 'Follow'}
        </Button>
      </Flex>
    </>
  );
}
