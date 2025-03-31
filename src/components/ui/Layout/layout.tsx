import { usePathname } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';

import { Box, Center, Flex, Spinner } from '@chakra-ui/react';
import Sidebar from '@/components/ui/Sidebar';
import Navbar from '@/components/ui/Navbar';
import { W_BASE, W_MED } from '@/constants';
import { auth } from '@/firebase/firebase';
import { Toaster } from '../toaster';

export default function Layout({ children }) {
  const [user, loading] = useAuthState(auth);
  const pathname = usePathname();

  const shouldRenderSidebar = pathname !== '/auth' && !!user;
  const shouldRenderNavbar = !user && !loading && pathname !== '/auth';
  const checkingUserIsAuth = !user && loading;

  if (checkingUserIsAuth) {
    return <PageLayoutSpinner />;
  }

  return (
    <>
      <Toaster />
      <Flex>
        {shouldRenderSidebar ? (
          <Box bg='#f4f4f4' w={{ base: `${W_BASE}px`, md: `${W_MED}px` }}>
            <Sidebar />
          </Box>
        ) : null}
        {shouldRenderNavbar ? <Navbar /> : null}
        <Box
          flex={1}
          mx='auto'
          w={{
            base: `calc(100% - ${W_BASE}px)`,
            md: `calc(100% - ${W_MED}px)`,
          }}
        >
          {children}
        </Box>
      </Flex>
    </>
  );
}

const PageLayoutSpinner = () => (
  <Center h='100vh' bg='#fafafa'>
    <Spinner size='xl' />
  </Center>
);
