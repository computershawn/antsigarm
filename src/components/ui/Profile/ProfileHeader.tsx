// @ts-nocheck
import { Button, Flex, Text, VStack } from '@chakra-ui/react';
import { Avatar } from '../avatar';

export default function ProfileHeader() {
  return (
    <Flex
      gap={{ base: 4, sm: 10 }}
      py={10}
      direction={{ base: 'column', sm: 'row' }}
    >
      <Avatar
        name='Dan Abramov'
        src='https://bit.ly/dan-abramov'
        alt='Dan Abramov'
      />
      <VStack align='flex-start' gap={2} mx='auto' flex={1}>
        <Flex
          gap={4}
          direction={{ base: 'column', sm: 'row' }}
          justify={{ base: 'center', sm: 'flex-start' }}
          align='center'
          w='full'
        >
          <Text fontSize={{ base: 'sm', md: 'lg' }}>danabramov</Text>
          <Flex gap={4} align='center' justify='center'>
            <Button size={{ base: 'xs', md: 'sm' }}>Edit Profile</Button>
          </Flex>
        </Flex>
        <Flex align='center' gap={{ base: 2, sm: 4 }}>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as='span' fontWeight='bold' mr={1}>
              4
            </Text>
            Posts
          </Text>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as='span' fontWeight='bold' mr={1}>
              8
            </Text>
            Followers
          </Text>
          <Text fontSize={{ base: 'xs', md: 'sm' }}>
            <Text as='span' fontWeight='bold' mr={1}>
              16
            </Text>
            Following
          </Text>
        </Flex>
        <Flex align='center' gap={4}>
          <Text fontSize='sm' fontWeight='bold'>
            danabramov
          </Text>
        </Flex>
        <Flex align='center' gap={4}>
          <Text fontSize='sm'>He is a cool guy</Text>
        </Flex>
      </VStack>
    </Flex>
  );
}
