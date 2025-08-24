import { HStack, VStack } from "@chakra-ui/react";
import Logo from "@/components/ui/logo";

export default function Home() {
  return (
    <VStack>
      <HStack width="full" align="left" justify="space-between" p="1rem" as="header">
        <Logo />
      </HStack>
      <VStack as="main">
        Main
      </VStack>
      <HStack as="footer">
        Footer
      </HStack>
    </VStack>
  );
}
