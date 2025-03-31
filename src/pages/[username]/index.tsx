import Navbar from '@/components/ui/Navbar';
import ProfileHeader from '@/components/ui/Profile/ProfileHeader';
import ProfilePosts from '@/components/ui/Profile/ProfilePosts';
import ProfileTabs from '@/components/ui/Profile/ProfileTabs';
import { Container, Flex } from '@chakra-ui/react';
// import { useRouter } from 'next/router';

export default function Username() {
  // const router = useRouter();
  // return <p>{router.query.username}&apos;s profile</p>

  return (
    <Container maxW='1024px' py={5}>
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
