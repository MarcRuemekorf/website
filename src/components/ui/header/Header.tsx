import React from "react";
import Logo from "./Logo";
import { Box, HStack } from "@chakra-ui/react";

const Header: React.FC = () => {
  return (
    <Box as="header" maxW="full" px="3rem" py="1.5rem" position="fixed">
      <HStack
        width="full"
        align="left"
        justify="space-between"
        py="1rem"
        as="header"
      >
        <Logo />
      </HStack>
    </Box>
  );
};

export default Header;
