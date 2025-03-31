import { useLogout } from '@/hooks/useLogout';
import { Avatar, Button, Flex, Text } from '@chakra-ui/react';

import { toaster } from '../toaster';
import useAuthStore from '@/store/authStore';
import { ChakraNextLink } from '../ChakraNextLink';

const onErrorCallback = (errMsg) => {
  toaster.create({
    description: errMsg,
    type: 'error',
  });
};

export default function SuggestedUsersHeader({ username, avatar }) {
  const { handleLogout, isLoggingOut } = useLogout(onErrorCallback);
  const authUser = useAuthStore((state) => state.user);

  if (!authUser) return null;

  return (
    <Flex justify='space-between' align='center' w='full' my={2}>
      <Flex align='center' gap={2}>
        <ChakraNextLink link={`${authUser.username}`}>
          <Avatar.Root size='2xs'>
            <Avatar.Fallback name={authUser.fullName} />
            <Avatar.Image src={authUser.profilePicUrl} />
          </Avatar.Root>
        </ChakraNextLink>

        <ChakraNextLink link={`${authUser.username}`}>
          <Text fontSize={12} fontWeight='bold'>
            {authUser.username}
          </Text>
        </ChakraNextLink>
      </Flex>
      <Button
        size='xs'
        variant='ghost'
        isLoading={isLoggingOut}
        onClick={handleLogout}
      >
        Logout
      </Button>
    </Flex>
  );
}
