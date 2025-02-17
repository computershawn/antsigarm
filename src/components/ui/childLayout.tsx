import { Box, HStack } from '@chakra-ui/react';
import Sidebar from './Sidebar';
import { usePathname } from 'next/navigation';

export default function ChildLayout({ children }) {
  const pathname = usePathname();

  const W_BASE = 70;
  const W_MED = 240;

  return (
    <HStack bg='tomato'>
      {pathname !== 'auth' ? (
        <Box bg='lightblue' w={{ base: `${W_BASE}px`, md: `${W_MED}px` }}>
          <Sidebar />
        </Box>
      ) : null}
      <Box
        flex={1}
        w={{ base: `calc(100% - ${W_BASE}px)`, md: `calc(100% - ${W_MED}px)` }}
      >
        {children}
      </Box>
    </HStack>
  );
}
