import {
  Box,
  Button,
  // DialogRoot as Modal,
  // DialogTrigger as ModalTrigger,
  Flex,
  GridItem,
  Image,
  Modal as Modal1,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { AiFillHeart } from 'react-icons/ai';
import { FaComment } from 'react-icons/fa';

import {
  DialogBackdrop as ModalOverlay,
  DialogBody as ModalBody,
  DialogHeader as ModalHeader,
  DialogRoot as Modal,
} from '../dialog';
import { Avatar } from '../avatar';
import { MdDelete } from 'react-icons/md';

export default function ProfilePost({ img }) {
  const { open, onOpen, onClose } = useDisclosure();

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
        {/* <ModalTrigger asChild>
        <Button variant="outline" size="sm">
          Open Dialog
        </Button>
      </ModalTrigger> */}
        <ModalOverlay />
        <ModalHeader>hello</ModalHeader>
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
              <Box _hover={{ bg: 'rgba(1, 1, 1, 0.3)', color: 'red' }} borderRadius={4} p={1}>
                <MdDelete size={20} cursor='pointer' />
              </Box>
            </Flex>
          </Flex>
        </ModalBody>
      </Modal>
    </>
  );
}
