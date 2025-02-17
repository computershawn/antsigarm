import type { ReactElement, ReactNode } from 'react';

import type { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ChakraProvider value={defaultSystem}>
      <ThemeProvider attribute='class' disableTransitionOnChange>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </ChakraProvider>
  );
}
