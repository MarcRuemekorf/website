import React from 'react';
import Logo from './Logo';
import { Box, HStack } from '@chakra-ui/react';

const Header: React.FC = () => {
    return (
      <Box w="full" px="1rem">
        <HStack
            width="full"
            align="left"
            justify="space-between"
            py="1rem"
            as="header"
            borderBottom="solid 1px #424242"
        >
            <Logo />
        </HStack>
      </Box>
    );
};

export default Header;