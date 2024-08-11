import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { FC } from 'react';
import { theme } from '../chakra/theme';
import { Provider } from 'react-redux';
import { store } from '../store';

type Props = {
  children?: React.ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Provider store={store}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
      </Provider>
    </ChakraProvider>
  );
};
