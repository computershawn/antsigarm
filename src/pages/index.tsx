import { Box, ClientOnly, Heading, Skeleton, VStack } from '@chakra-ui/react';
import Image from 'next/image';
import { ColorModeButton } from '../components/ui/color-mode';

export default function Page() {
  return (
    <Box textAlign='center' fontSize='xl' pt='30vh'>
      <VStack gap='8'>
        <Image
          alt='chakra logo'
          src='/static/logo.svg'
          width='80'
          height='80'
        />
        <Heading size='2xl' letterSpacing='tight'>
          Homepage
        </Heading>
      </VStack>

      <Box pos='absolute' top='4' right='4'>
        <ClientOnly fallback={<Skeleton w='10' h='10' rounded='md' />}>
          <ColorModeButton />
        </ClientOnly>
      </Box>
    </Box>
  );
}
