'use client';

import NextLink from 'next/link';

import { Box, Link as ChakraLink, Text, VStack } from '@chakra-ui/react';
import { AiFillHome } from 'react-icons/ai';

import { Tooltip } from '../tooltip';

import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
  NotificationsLogo,
  SearchLogo,
} from '../../../assets/constants';

export default function Sidebar() {
  const sidebarItems = [
    {
      icon: <AiFillHome />,
      text: 'Home',
      link: '/',
    },
    {
      icon: <SearchLogo />,
      text: 'Search',
      link: '/search',
    },
    {
      icon: <NotificationsLogo />,
      text: 'Notifications',
      link: '/notifications',
    },
    {
      icon: <CreatePostLogo />,
      text: 'Create',
      link: '',
    },
    // {
    //   icon: <Avatar src='/profilepic.png' />,
    //   text: 'Profile',
    //   link: '/computershawn',
    // },
  ];

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
      <VStack align='flex-start' gap={10} w='full' h='full'>
        <ChakraLink asChild display={{ base: 'none', md: 'block' }}>
          <NextLink href='/'>
            <InstagramLogo />
          </NextLink>
        </ChakraLink>
        <ChakraLink asChild w={10} display={{ base: 'block', md: 'none' }}>
          <NextLink href='/'>
            <InstagramMobileLogo />
          </NextLink>
        </ChakraLink>
        <VStack>
          {sidebarItems.map((item, index) => (
            <Tooltip key={item.text} content='This is the tooltip content'>
              <Box
                w={{ base: 10, md: 'full'}}
                display='flex'
                // align='center'
                gap={4}
                _hover={{ bg: 'white' }}
                borderRadius={6}
                p={2}
              >
                {item.link ? (
                  <ChakraLink asChild>
                    <NextLink href={item.link}>
                      {item.icon}
                      <Text display={{ base: 'none', md: 'block' }}>
                        {item.text}
                      </Text>
                    </NextLink>
                  </ChakraLink>
                ) : (
                  <>
                    {item.icon}
                    <Text display={{ base: 'none', md: 'block' }}>
                      {item.text}
                    </Text>
                  </>
                )}
              </Box>
            </Tooltip>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
}

const Blorp = () => {
  // return <span>yo dawg</span>
  return <Box>yo dawg</Box>;
};
