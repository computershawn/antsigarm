import { Box, Container, Flex, VStack } from '@chakra-ui/react';
import { Skeleton, SkeletonCircle } from '../skeleton';

import FeedPost from './FeedPost';
import { useEffect, useState } from 'react';

export default function FeedPostList() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  const list = [
    { username: 'ronnie', img: '/img1.png', avatar: '/img1.png' },
    { username: 'bobby', img: '/img2.png', avatar: '/img2.png' },
    { username: 'ricky', img: '/img3.png', avatar: '/img3.png' },
    { username: 'mike', img: '/img4.png', avatar: '/img4.png' },
  ];

  return (
    <Container maxW='640px' py={10} px={2}>
      {isLoading &&
        [1, 2, 3, 4].map((_, index) => (
          <VStack key={index} gap={4} align='flex-start' mb={10}>
            <Flex gap={2} align="center">
              <SkeletonCircle size={10} />
              <Skeleton h='10px' w='200px' />
            </Flex>
            <Skeleton w='full'>
              <Box h='500px'>contents wrapped</Box>
            </Skeleton>
          </VStack>
        ))}

      {!isLoading &&
        list.map((post) => (
          <FeedPost
            username={post.username}
            img={post.img}
            avatar={post.avatar}
          />
        ))}
    </Container>
  );
}
