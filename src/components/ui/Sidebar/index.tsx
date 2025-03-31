// TODO: UPDATE ICONS
// TODO: FIX MOBILE LOGO LAYOUT

import {
  Avatar,
  Box,
  Button,
  Flex,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';
import { toaster } from '@/components/ui/toaster';

import { ChakraNextLink as Link } from '../ChakraNextLink';
import { Tooltip } from '../tooltip';
import {
  // CreatePostLogo,
  Square,
  AntsigarmLogo,
  AntsigarmMobileLogo,
} from '../../../assets/constants';
import { useLogout } from '@/hooks/useLogout';
import { LuLogOut } from 'react-icons/lu';

const onErrorCallback = (errMsg) => {
  toaster.create({
    description: errMsg,
    type: 'error',
  });
};

export default function Sidebar() {
  // TODO: UPDATE THESE ICONS
  const sidebarItems = [
    {
      icon: <Square />,
      text: 'Home',
      link: '/',
    },
    {
      icon: <Square />,
      text: 'Search',
      link: '/search',
    },
    {
      icon: <Square />,
      text: 'Notifications',
      link: '/notifications',
    },
    {
      icon: <Square />,
      text: 'Create',
      link: '',
    },
    {
      icon: (
        <Avatar.Root size='2xs'>
          <Avatar.Fallback name='computershawn' />
          <Avatar.Image src='/profilepic.png' />
        </Avatar.Root>
      ),
      text: 'Profile',
      link: '/computershawn',
    },
  ];

  const { handleLogout, isLoggingOut } = useLogout({ onErrorCallback });

  return (
    <Box
      height='100vh'
      borderRight='1px solid'
      borderColor='white'
      py={8}
      position='sticky'
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <VStack
        align={{ base: 'center', md: 'flex-start' }}
        gap={10}
        w='full'
        h='full'
      >
        <Box ml='0.5rem' display={{ base: 'none', md: 'block' }}>
          <Link link='/'>
            <AntsigarmLogo />
          </Link>
        </Box>

        <Box display={{ base: 'block', md: 'none' }}>
          <Link link='/'>
            <AntsigarmMobileLogo />
          </Link>
        </Box>

        <VStack align='flex-start' height='100%'>
          {sidebarItems.map((item) => (
            <Tooltip
              key={item.text}
              content={item.text}
              showArrow
              // @ts-expect-error fix this homie
              positioning={{ placement: 'right' }}
            >
              <Flex
                w={{ base: 10, md: 'full' }}
                _hover={{ bg: 'white' }}
                borderRadius={6}
                p={2}
              >
                {item.link ? (
                  <Link link={item.link}>
                    <Icon fontSize='40px'>{item.icon}</Icon>
                    <Text display={{ base: 'none', md: 'block' }}>
                      {item.text}
                    </Text>
                  </Link>
                ) : (
                  <Flex gap={1.5}>
                    {item.icon}
                    <Text display={{ base: 'none', md: 'block' }}>
                      {item.text}
                    </Text>
                  </Flex>
                )}
              </Flex>
            </Tooltip>
          ))}
          <Tooltip
            content='Logout'
            showArrow
            // @ts-expect-error fix this homie
            positioning={{ placement: 'right' }}
          >
            <Button
              variant='ghost'
              loading={isLoggingOut}
              onClick={handleLogout}
              w={{ base: 10, md: 'full' }}
              justifyContent="flex-start"
              _hover={{ bg: 'white' }}
              borderRadius={6}
              p={2}
              mt='auto'
            >
              <LuLogOut />
              <Text display={{ base: 'none', md: 'block' }}>Logout</Text>
            </Button>
          </Tooltip>
        </VStack>
      </VStack>
    </Box>
  );
}
