import { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
    baseStyle: {
        fontSize: '100px',
    },
    variants: {
        basic: {
            bg: 'transparent',
            padding: '0',
            _hover: {
                _disabled: {
                    bg: 'none',
                },
            },
            _active: {
                bg: 'none',
            },
            _focus: {
                boxShadow: 'none',
            },
        }
    },
    
}