// import type { ReactElement, ReactNode } from 'react';

// import type { NextPage } from 'next';
// import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import { ChakraProvider, defaultSystem } from '@chakra-ui/react';

import { system } from '../theme';
import Layout from '@/components/ui/Layout/layout';

// export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
//   getLayout?: (page: ReactElement) => ReactNode;
// };

// type AppPropsWithLayout = AppProps & {
//   Component: NextPageWithLayout;
// };

const hellaSystem = {
  ...defaultSystem,
  ...system,
};

export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <ChakraProvider value={hellaSystem}>
      <ThemeProvider attribute='class' disableTransitionOnChange>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ChakraProvider>
  );
}
