import { Container, Flex } from '@chakra-ui/react';
import ProfileHeader from '@/components/ui/Profile/ProfileHeader';
import ProfilePosts from '@/components/ui/Profile/ProfilePosts';
import ProfileTabs from '@/components/ui/Profile/ProfileTabs';
import { CONT_LG } from '@/constants';


export default function Username() {
  return (
    <Container maxW={CONT_LG} py={5}>
      <Flex
        py={10}
        px={4}
        pl={{ base: 4, md: 10 }}
        w='full'
        mx='auto'
        direction='column'
      >
        <ProfileHeader />
      </Flex>
      <Flex
        px={{ base: 2, sm: 4 }}
        maxW='full'
        mx='auto'
        borderTop='1px solid'
        direction='column'
      >
        <ProfileTabs />
        <ProfilePosts />
      </Flex>
    </Container>
  );
}
