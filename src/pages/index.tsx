import { Box, Container, Flex } from '@chakra-ui/react';
import Head from 'next/head';

import ChildLayout from '../components/ui/childLayout';
import ParentLayout from '../components/ui/parentLayout';
import FeedPostList from '../components/ui/FeedPosts/FeedPostList';
import SuggestedUserList from '../components/ui/SuggestedUsers/SuggestedUserList';

export default function Home() {
  return (
    <>
      <Head>
        <title>Antsigarm</title>
      </Head>
      <Container maxW='1024px'>
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

Home.getLayout = function getLayout(page) {
  return (
    <ParentLayout>
      <ChildLayout>{page}</ChildLayout>
    </ParentLayout>
  );
};
