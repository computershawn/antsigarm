import { Box, VStack, Heading, ClientOnly, Skeleton } from '@chakra-ui/react';
import { ColorModeButton } from '../components/ui/color-mode';
import ChildLayout from '../components/ui/childLayout';
import ParentLayout from '../components/ui/parentLayout';

export default function Page() {
  return (
    <Box textAlign='center' fontSize='xl' pt='30vh'>
      <VStack gap='8'>
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

Page.getLayout = function getLayout(page) {
  return (
    <ParentLayout>
      <ChildLayout>{page}</ChildLayout>
    </ParentLayout>
  );
};
