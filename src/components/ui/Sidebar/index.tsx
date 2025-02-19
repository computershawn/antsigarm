'use client';

import { type ReactNode } from 'react';

import NextLink from 'next/link';

import {
  Avatar,
  Box,
  Link as ChakraLink,
  Flex,
  Icon,
  Text,
  VStack,
} from '@chakra-ui/react';

import { Tooltip } from '../tooltip';

import {
  CreatePostLogo,
  InstagramLogo,
  InstagramMobileLogo,
} from '../../../assets/constants';

export default function Sidebar() {
  // TODO: UPDATE THESE ICONS
  const sidebarItems = [
    {
      icon: <CreatePostLogo />,
      text: 'Home',
      link: '/',
    },
    {
      icon: <CreatePostLogo />,
      text: 'Search',
      link: '/search',
    },
    {
      icon: <CreatePostLogo />,
      text: 'Notifications',
      link: '/notifications',
    },
    {
      icon: <CreatePostLogo />,
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
        <VStack align='flex-start'>
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
                  <ChakraNextLink link={item.link}>
                    <Icon fontSize='40px'>{item.icon}</Icon>
                    <Text display={{ base: 'none', md: 'block' }}>
                      {item.text}
                    </Text>
                  </ChakraNextLink>
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
        </VStack>
      </VStack>
    </Box>
  );
}

const ChakraNextLink = ({
  link,
  children,
}: {
  link: string;
  children: ReactNode;
}) => {
  return (
    <ChakraLink asChild>
      <NextLink href={link}>{children}</NextLink>
    </ChakraLink>
  );
};
