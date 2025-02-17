'use client';

import { ChakraProvider, defaultSystem, extendTheme } from '@chakra-ui/react';
import { ThemeProvider } from 'next-themes';

export default function RootLayout(props) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute='class' disableTransitionOnChange>
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
