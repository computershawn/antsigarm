import { Box, Center, Flex, Spinner } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import { usePathname } from 'next/navigation';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/firebase/firebase';
import Navbar from './Navbar';

export default function ChildLayout({ children }) {
  const [user, loading] = useAuthState(auth);
  const pathname = usePathname();

  const W_BASE = 70;
  const W_MED = 240;
  const shouldRenderSidebar = pathname !== 'auth' && !!user;
  const shouldRenderNavbar = !user && !loading && pathname !== 'auth';
  const checkingUserIsAuth = !user && loading;

  if (checkingUserIsAuth) {
    return <PageLayoutSpinner />;
  }

  return (
    <Flex bg='#fafafa' direction={shouldRenderNavbar ? 'column' : 'row'}>
      {shouldRenderSidebar ? (
        <Box bg='#f4f4f4' w={{ base: `${W_BASE}px`, md: `${W_MED}px` }}>
          <Sidebar />
        </Box>
      ) : null}
      {shouldRenderNavbar ? <Navbar /> : null}
      <Box
        flex={1}
        w={{ base: `calc(100% - ${W_BASE}px)`, md: `calc(100% - ${W_MED}px)` }}
      >
        {children}
      </Box>
    </Flex>
  );
}

const PageLayoutSpinner = () => (
  <Center h='100vh' bg='#fafafa'>
    <Spinner size='xl' />
  </Center>
);
