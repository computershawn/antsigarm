'use client';

import {
  Button,
  Field,
  Input,
  Stack,
  Center,
  VStack,
  CloseButton,
  Dialog,
  Portal,
} from '@chakra-ui/react';

import { Avatar } from '../avatar';
import { useState } from 'react';
import useAuthStore from '@/store/authStore';

export default function EditProfile() {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    bio: '',
  });

  // @ts-ignore
  const authUser = useAuthStore((state) => state.user);

  const handleSaveProfile = () => {
    console.log('inputs', inputs);
  };

  return (
    <Dialog.Root placement={'center'} motionPreset='slide-in-bottom'>
      <Dialog.Trigger asChild>
        <Button size={{ base: 'xs', md: 'sm' }}>Edit Profile</Button>
      </Dialog.Trigger>
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Edit Profile</Dialog.Title>
            </Dialog.Header>
            <Dialog.Body>
              <VStack gap={4}>
                <Field.Root id='userAvatar'>
                  <Stack direction={['column', 'row']} gap={6}>
                    <Center>
                      <Avatar
                        // @ts-ignore
                        name='https://bit.ly/sage-adebayo'
                        src='https://bit.ly/sage-adebayo'
                        alt='https://bit.ly/sage-adebayo'
                      />
                    </Center>
                    <Center w='full'>
                      <Button w='full'>Upload Photo</Button>
                    </Center>
                  </Stack>
                </Field.Root>

                <Field.Root id='fullName' required>
                  <Field.Label>Full Name</Field.Label>
                  <Input
                    placeholder={authUser.fullName}
                    _placeholder={{ color: 'gray.500' }}
                    type='text'
                    value={inputs.fullName}
                    onChange={(e) =>
                      setInputs({ ...inputs, fullName: e.target.value })
                    }
                  />
                </Field.Root>

                <Field.Root id='bio' required>
                  <Field.Label>Bio</Field.Label>
                  <Input
                    placeholder={authUser.bio || 'A few words about yourself…'}
                    _placeholder={{ color: 'gray.500' }}
                    type='text'
                    value={inputs.bio}
                    onChange={(e) =>
                      setInputs({ ...inputs, bio: e.target.value })
                    }
                  />
                </Field.Root>
              </VStack>
            </Dialog.Body>
            <Dialog.Footer>
              <Dialog.ActionTrigger asChild>
                <Button variant='outline'>Cancel</Button>
              </Dialog.ActionTrigger>
              <Button onClick={handleSaveProfile}>Save</Button>
            </Dialog.Footer>
            <Dialog.CloseTrigger asChild>
              <CloseButton size='sm' />
            </Dialog.CloseTrigger>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
}
