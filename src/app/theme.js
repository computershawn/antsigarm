import { extendTheme } from '@chakra-ui/react';

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

console.log('extendTheme is', extendTheme);

const theme = extendTheme({ config });

export { theme };
