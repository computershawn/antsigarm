import { useEffect } from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Box, Container, Flex } from '@chakra-ui/react';
import FeedPostList from '@/components/ui/FeedPosts/FeedPostList';
import SuggestedUserList from '@/components/ui/SuggestedUsers/SuggestedUserList';
import { auth } from '@/firebase/firebase';
import { CONT_LG } from '@/constants';

export default function Home() {
  const [authUser] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!authUser) {
      router.push('/auth');
    }
  }, [authUser, router]);

  return (
    <>
      <Head>
        <title>Antsigarm</title>
      </Head>
      <Container maxW={CONT_LG}>
        <Flex gap={20}>
          <Box flex={2} py={10}>
            <FeedPostList />
          </Box>
          <Box
            flex={3}
            mr={20}
            display={{ base: 'none', lg: 'block' }}
            maxW='300px'
          >
            <SuggestedUserList />
          </Box>
        </Flex>
      </Container>
    </>
  );
}
