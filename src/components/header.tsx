import { Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { FC } from 'react';
import Logo from '../../public/assets/logo.svg';
import LightToggler from '../../public/assets/light-toggler.svg';
import DarkToggler from '../../public/assets/dark-toggler.svg';

export const Header: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex
      as="header"
      justifyContent="space-between"
      alignItems="centerx"
      m={{ base: '40px 0', md: '70px 0', sm: '20px 0' }}
    >
      <Logo />
      <IconButton
        aria-label="theme toggle"
        border="none"
        bg="none"
        onClick={toggleColorMode}
        icon={colorMode === 'dark' ? <LightToggler /> : <DarkToggler />}
      ></IconButton>
    </Flex>
  );
};
