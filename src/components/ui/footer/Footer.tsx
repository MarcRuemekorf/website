import React from 'react';
import { Box, HStack } from '@chakra-ui/react';

const Footer: React.FC = () => {
    return (
      <Box w="full" px="1rem" mt="auto">
        <HStack
            width="full"
            align="left"
            justify="space-between"
            py="1rem"
            as="footer"
        >
            Footer
        </HStack>
      </Box>
    );
};

export default Footer;