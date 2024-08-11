import { ComponentStyleConfig } from '@chakra-ui/react';

export const Button: ComponentStyleConfig = {
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
        },
        filter: {
            color: '#9495A5'
        },
        active: {
            color: '#3A7CFD'
        }
    }
}