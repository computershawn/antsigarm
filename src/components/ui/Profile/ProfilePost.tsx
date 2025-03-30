import {
  Box,
  CloseButton,
  Dialog,
  Flex,
  For,
  GridItem,
  HStack,
  Image,
  Portal,
  Separator,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';

import Comment from '../Comment';
import { Avatar } from '../avatar';
import { MdDelete } from 'react-icons/md';
import PostFooter from '../FeedPosts/PostFooter';

export default function ProfilePost({ img }) {
  const { open, onOpen, onClose } = useDisclosure();

  return (
    <HStack>
      <For each={['xs']}>
        {(size) => (
          <Dialog.Root key={size} size={{ base: 'lg', md: 'xl' }}>
            <Dialog.Trigger asChild>
              <GridItem
                cursor='pointer'
                borderRadius={4}
                overflow='hidden'
                border='1px solid rgb(191, 191, 191)'
                position='relative'
                aspectRatio='square'
              >
                <Flex
                  opacity={0}
                  _hover={{ opacity: 1 }}
                  position='absolute'
                  top={0}
                  left={0}
                  right={0}
                  bottom={0}
                  bg='rgba(0, 0, 0, 0.7)'
                  transition='all 0.3s ease'
                  zIndex={1}
                  justify='center'
                >
                  <Flex align='center' justify='center' gap={50}>
                    <Flex>
                      <AiFillHeart size={20} fill='white' />
                      <Text fontWeight='bold' ml={2} color='white'>
                        24
                      </Text>
                    </Flex>
                    <Flex>
                      <FaComment size={20} fill='white' />
                      <Text fontWeight='bold' ml={2} color='white'>
                        7
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
                <Image
                  src={img}
                  alt='profile post'
                  w='100%'
                  h='100%'
                  objectFit='cover'
                />
              </GridItem>
            </Dialog.Trigger>
            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content>
                  <Dialog.Body bg='black' pb={5}>
                    <Flex
                      gap={4}
                      w={{ base: '90%', sm: '70%', md: 'full' }}
                      mx='auto'
                    >
                      <Box
                        borderRadius={4}
                        overflow='hidden'
                        border='1px solid rgb(191, 191, 191)'
                        flex={1.5}
                      >
                        <Image src={img} alt='profile post' />
                      </Box>
                      <Flex
                        flex={1}
                        direction='column'
                        px={10}
                        display={{ base: 'none', md: 'flex' }}
                      >
                        <Flex align='center' justify='space-between'>
                          <Flex align='center' gap={4}>
                            <Avatar
                              src='/profilepic.png'
                              size='sm'
                              name='Shawn J'
                            />
                            <Text fontWeight='bold' fontSize={12} color='white'>
                              computershawn
                            </Text>
                          </Flex>
                          <Box
                            _hover={{
                              bg: 'rgba(255,255,255,0.3)',
                              color: 'red',
                            }}
                            borderRadius={4}
                            p={1}
                          >
                            <MdDelete
                              color='white'
                              size={20}
                              cursor='pointer'
                            />
                          </Box>
                        </Flex>
                        <Separator my={4} />
                        <VStack
                          width='full'
                          align='start'
                          maxH='350px'
                          overflowY='auto'
                          // TODO: Apply this scrollbar styling to the whole app
                          css={{
                            '&::-webkit-scrollbar': {
                              width: '10px',
                            },
                            '&::-webkit-scrollbar-track': {
                              background: '#1e1e24',
                            },
                            '&::-webkit-scrollbar-thumb': {
                              background: '#3f3f40',
                            },
                            '&::-webkit-scrollbar-thumb: hover': {
                              background: '#555',
                            },
                          }}
                        >
                          {new Array(10).fill(0).map((_, idx) => (
                            <Comment
                              key={idx}
                              createdAt='1d ago'
                              username='computershawn'
                              profilePic='/profilepic.png'
                              text='nice pic'
                            />
                          ))}
                        </VStack>
                        <Separator my={4} />
                        <PostFooter
                          username='shut up'
                          color='white'
                          isProfilePage
                        />
                      </Flex>
                    </Flex>
                  </Dialog.Body>
                  {/* <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                      <Button variant='outline'>Cancel</Button>
                    </Dialog.ActionTrigger>
                    <Button>Save</Button>
                  </Dialog.Footer> */}
                  <Dialog.CloseTrigger asChild>
                    <CloseButton
                      size='sm'
                      color='white'
                      _hover={{ color: 'black', bg: 'white' }}
                    />
                  </Dialog.CloseTrigger>
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>
        )}
      </For>
    </HStack>
  );

  return (
    <>
      <GridItem
        cursor='pointer'
        borderRadius={4}
        overflow='hidden'
        border='1px solid rgb(191, 191, 191)'
        position='relative'
        aspectRatio='square'
      >
        <Flex
          opacity={0}
          _hover={{ opacity: 1 }}
          position='absolute'
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg='rgba(0, 0, 0, 0.7)'
          transition='all 0.3s ease'
          zIndex={1}
          justify='center'
        >
          <Flex align='center' justify='center' gap={50}>
            <Flex>
              <AiFillHeart size={20} fill='white' />
              <Text fontWeight='bold' ml={2} color='white'>
                24
              </Text>
            </Flex>
            <Flex>
              <FaComment size={20} fill='white' />
              <Text fontWeight='bold' ml={2} color='white'>
                7
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <Image
          src={img}
          alt='profile post'
          w='100%'
          h='100%'
          objectFit='cover'
        />
      </GridItem>
      <Modal
        open={open}
        onExitComplete={onClose}
        placement='center'
        size={{ base: 'lg', md: 'xl' }}
      >
        <ModalTrigger asChild>
          <GridItem
            cursor='pointer'
            borderRadius={4}
            overflow='hidden'
            border='1px solid rgb(191, 191, 191)'
            position='relative'
            aspectRatio='square'
          >
            <Flex
              opacity={0}
              _hover={{ opacity: 1 }}
              position='absolute'
              top={0}
              left={0}
              right={0}
              bottom={0}
              bg='rgba(0, 0, 0, 0.7)'
              transition='all 0.3s ease'
              zIndex={1}
              justify='center'
            >
              <Flex align='center' justify='center' gap={50}>
                <Flex>
                  <AiFillHeart size={20} fill='white' />
                  <Text fontWeight='bold' ml={2} color='white'>
                    24
                  </Text>
                </Flex>
                <Flex>
                  <FaComment size={20} fill='white' />
                  <Text fontWeight='bold' ml={2} color='white'>
                    7
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Image
              src={img}
              alt='profile post'
              w='100%'
              h='100%'
              objectFit='cover'
            />
          </GridItem>
        </ModalTrigger>
        {/* <ModalOverlay bg="rgb(0, 0, 0, 0.5)" /> */}
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody bg='black' pb={5}>
            <Flex gap={4} w={{ base: '90%', sm: '70%', md: 'full' }} mx='auto'>
              <Box
                borderRadius={4}
                overflow='hidden'
                border='1px solid rgb(191, 191, 191)'
                flex={1.5}
              >
                <Image src={img} alt='profile post' />
              </Box>
              <Flex
                flex={1}
                direction='column'
                px={10}
                display={{ base: 'none', md: 'flex' }}
              >
                <Flex align='center' justify='space-between'>
                  <Avatar src='/profilepic.png' size='sm' name='Shawn J' />
                  <Text fontWeight='bold' fontSize={12}>
                    computershawn
                  </Text>
                </Flex>
                <Box
                  _hover={{ bg: 'rgba(1, 1, 1, 0.3)', color: 'red' }}
                  borderRadius={4}
                  p={1}
                >
                  <MdDelete size={20} cursor='pointer' />
                </Box>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
