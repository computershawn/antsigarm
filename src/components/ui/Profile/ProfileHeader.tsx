import { Button, Flex, Text, VStack } from '@chakra-ui/react';
import { Avatar } from '../avatar';
import useUserProfileStore from '@/store/userProfileStore';
import useAuthStore from '@/store/authStore';
import EditProfile from './EditProfile';

export default function ProfileHeader() {
  // @ts-ignore
  const { userProfile } = useUserProfileStore();
  // @ts-ignore
  const authUser = useAuthStore((state) => state.user);
  const visitingOwnProfileAndAuth =
    authUser && authUser.uid === userProfile.uid;
  const visitingOtherUserProfileAndAuth =
    authUser && authUser.uid !== userProfile.uid;

  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: 'column', sm: 'row' }}
    >
      <Avatar
        // @ts-ignore
        name={userProfile.fullName}
        src={userProfile.profilePicUrl}
        alt={userProfile.fullName}
      />
      <VStack align='flex-start' gap={2} mx='auto' flex={1}>
        <Flex
          gap={4}
          direction={{ base: 'column', sm: 'row' }}
          justify={{ base: 'center', sm: 'flex-start' }}
          align='center'
          w='full'
        >
          <Text fontSize={{ base: 'sm', md: 'lg' }}>
            {userProfile.username}
          </Text>
          {visitingOwnProfileAndAuth && (
            <Flex gap={4} align='center' justify='center'>
              <EditProfile />
            </Flex>
          )}
          {visitingOtherUserProfileAndAuth && (
            <Flex gap={4} align='center' justify='center'>
              <Button
                size={{ base: 'xs', md: 'sm' }}
                bgColor='blue.500'
                _hover={{ bgColor: 'blue.600' }}
              >
                Follow
              </Button>
            </Flex>
          )}
        </Flex>
        <Flex align='center' gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as='span' fontWeight='bold' mr={1}>
              {userProfile.posts.length}
            </Text>
            Posts
          </Text>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as='span' fontWeight='bold' mr={1}>
              {userProfile.followers.length}
            </Text>
            Followers
          </Text>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as='span' fontWeight='bold' mr={1}>
              {userProfile.following.length}
            </Text>
            Following
          </Text>
        </Flex>
        <Flex align='center' gap={4}>
          <Text fontSize='sm' fontWeight='bold'>
            {userProfile.fullName}
          </Text>
        </Flex>
        {userProfile.bio && (
          <Flex align='center' gap={4}>
            <Text fontSize='sm'>{userProfile.bio}</Text>
          </Flex>
        )}
      </VStack>
    </Flex>
  );
}
