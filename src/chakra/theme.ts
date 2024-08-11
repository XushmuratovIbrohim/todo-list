import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { GlobalStyleProps } from '@chakra-ui/theme-tools';
import { Button } from './components/Button';
import '@fontsource/josefin-sans'

const config: ThemeConfig = {
  initialColorMode: 'dark',
};

export const theme = extendTheme({
  config,
  fonts: {
    heading: 'Josefin Sans',
    body: 'Josefin Sans',
  },
  styles: {
    global: ({ colorMode }: GlobalStyleProps) => ({
      body: {
        bg: colorMode === 'dark' ? 'dark.900' : 'light.900',
        bgImage: colorMode === 'dark' ? '/assets/dark-bg.png' : '/assets/light-bg.png',
        color: colorMode === 'dark' ? '#C8CBE7' : '#494C6B',
        bgSize: '100% auto',
        bgRepeat: 'no-repeat',
        maxWidth: '540px',
        margin: '0 auto',
      },
    }),
    colors: {
      light: {
        900: '#FAFAFA',
      },
      dark: {
        900: '#171823',
      },
    },
  },
  components: {
    Button,
  },
});
