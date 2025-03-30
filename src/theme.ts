import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

const customConfig = defineConfig({
  globalCss: {
    '&::-webkit-scrollbar': {
      width: '10px',
    },
    '&::-webkit-scrollbar-track': {
      background: '#1e1e24',
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#3f3f40',
    },
    '&::-webkit-scrollbar-thumb: hover': {
      background: '#555',
    },
  },
});

export const system = createSystem(defaultConfig, customConfig);
