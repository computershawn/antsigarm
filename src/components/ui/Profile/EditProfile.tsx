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
  useDisclosure,
} from '@chakra-ui/react';

import { Avatar } from '../avatar';
import { useRef, useState } from 'react';
import useAuthStore from '@/store/authStore';
import usePreviewImage from '@/hooks/usePreviewImage';
import { toaster } from '../toaster';
import useEditProfile from '@/hooks/useEditProfile';

export default function EditProfile() {
  const [inputs, setInputs] = useState({
    fullName: '',
    username: '',
    bio: '',
  });
  const [isOpen, setIsOpen] = useState(false);

  const onErrorCallback = (errMsg: string) => {
    toaster.create({
      description: errMsg,
      type: 'error',
    });
  };

  // @ts-ignore
  const authUser = useAuthStore((state) => state.user);

  const { editProfile, isUpdating } = useEditProfile(onErrorCallback);

  const handleSaveProfile = async () => {
    try {
      await editProfile(inputs, selectedFile);
      setSelectedFile(null);
      setIsOpen(false);
    } catch (e) {
      onErrorCallback(e.message);
    }
  };

  const initUploadPhoto = () => {
    if (!!fileRef.current) {
      fileRef.current?.click();
    }
  };

  const fileRef = useRef<HTMLInputElement>(null);
  const { handleImageChange, setSelectedFile, selectedFile } =
    usePreviewImage(onErrorCallback);

  return (
    <Dialog.Root
      placement={'center'}
      motionPreset='slide-in-bottom'
      open={isOpen}
      onOpenChange={(e) => setIsOpen(e.open)}
    >
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
                        src={selectedFile || authUser.profilePicUrl}
                        alt='https://bit.ly/sage-adebayo'
                      />
                    </Center>
                    <Center w='full'>
                      <Button w='full' onClick={initUploadPhoto}>
                        Upload Photo
                      </Button>
                    </Center>
                    <Input
                      type='file'
                      hidden
                      ref={fileRef}
                      onChange={handleImageChange}
                    />
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
              <Button onClick={handleSaveProfile} loading={isUpdating}>
                Save
              </Button>
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
