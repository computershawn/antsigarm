import { Container, Flex, Stack, Text } from '@chakra-ui/react';
import ProfileHeader from '@/components/ui/Profile/ProfileHeader';
import ProfilePosts from '@/components/ui/Profile/ProfilePosts';
import ProfileTabs from '@/components/ui/Profile/ProfileTabs';
import { CONT_LG } from '@/constants';
import { useRouter } from 'next/router';
import useGetUserProfileByUsername from '@/hooks/useGetUserProfileByUsername';
import { ChakraNextLink } from '@/components/ui/ChakraNextLink';
import { Skeleton, SkeletonCircle } from '@/components/ui/skeleton';

export default function Username() {
  const router = useRouter();
  const username = router.query.username;

  const { isLoading, userProfile } = useGetUserProfileByUsername(
    username,
    console.error
  );

  const userNotFound = isLoading && !userProfile;

  if (userNotFound) {
    return <UserNotFound />;
  }

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
        {!isLoading && !!userProfile && <ProfileHeader />}
        {isLoading && <ProfileHeaderSkeleton />}
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

const UserNotFound = () => {
  return (
    <Flex direction='column' textAlign='center' mx='auto'>
      <Text fontSize='2xl'>User Not Found</Text>
      <ChakraNextLink link='/'>Go home</ChakraNextLink>
    </Flex>
  );
};

const ProfileHeaderSkeleton = () => {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: 'column', sm: 'row' }}
      justify='center'
      align='center'
    >
      <SkeletonCircle size={24} />
      <Stack>
        <Skeleton h='12px' w='150px' />
        <Skeleton h='12px' w='150px' />
      </Stack>
    </Flex>
  );
};
