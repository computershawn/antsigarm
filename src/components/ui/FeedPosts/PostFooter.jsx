import { useState } from 'react';
import { Flex, HStack, Icon, Input, Text, VStack } from '@chakra-ui/react';

import { FaRegComment, FaHeart, FaRegHeart } from 'react-icons/fa6';

import { InputGroup } from '../input-group';

export default function PostFooter({ username, color, isProfilePage }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikes(likes - 1);
    } else {
      setLiked(true);
      setLikes(likes + 1);
    }
  };

  const commentCount = 2468;

  return (
    <VStack mb={12} gap={1} align='flex-start' mt='auto'>
      <HStack align='center' gap={4} w='full' my={1}>
        <Flex onClick={handleLike} cursor='pointer' gap={1} align='center'>
          <Icon fontSize='2xl'>
            {!liked ? (
              <FaRegHeart color={color} />
            ) : (
              <FaHeart color='#c90202' />
            )}
          </Icon>
          <Text fontSize={12} color={color}>
            {likes}
          </Text>
        </Flex>
        <Flex cursor='pointer' gap={1} align='center'>
          <Icon fontSize='2xl'>
            <FaRegComment color={color} />
          </Icon>
          <Text fontSize={12} color={color}>
            {commentCount}
          </Text>
        </Flex>
      </HStack>

      {!isProfilePage && (
        <>
          <Text fontSize={14} fontWeight='700'>
            {username}{' '}
            <Text as='span' fontWeight='400' color={color}>
              Konichiwa Bitches
            </Text>
          </Text>
          <Text fontSize={14} color='gray'>
            {`View all ${commentCount} comments`}
          </Text>
        </>
      )}

      <InputGroup
        w='100%'
        endElement={
          <Text
            fontSize={12}
            color='gray'
            fontWeight='bold'
            _hover={{ color: 'black' }}
            transition='0.2s ease-in-out'
          >
            Post
          </Text>
        }
      >
        <Input fontSize={14} variant='flushed' placeholder='Add a comment…' />
      </InputGroup>
    </VStack>
  );
}
