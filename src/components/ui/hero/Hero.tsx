import React from "react";
import { Box, Heading, Flex, HStack, Text } from "@chakra-ui/react";
import MotionElement from "@/components/ui/MotionElement";
import Logo from "@/components/ui/header/Logo";

interface HeroProps {
  title?: string;
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = () => {
  return (
    <Box as="section" h="full" maxW="full" p="3rem">
      <HStack gap="2rem" h="full">
        <Flex direction="column" justify="start" align="flex-start" h="100%">
          <Logo />
          <Box mt="auto">
            <MotionElement
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                y: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
              }}
            >
              <Text
                as="h1"
                fontSize="9xl"
                lineHeight="1"
                fontWeight="bold"
                maxW="64ch"
              >
                Frontend developer met een achtergrond in design
              </Text>
            </MotionElement>
          </Box>
        </Flex>
        <Flex justify="start" align="flex-start" h="100%">
          <MotionElement
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              y: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <Text fontSize="2xl">
              Sinds 2022 goed op mijn plek als developer bij de zelfsturende
              organisatie Enrise in Amersfoort
            </Text>
          </MotionElement>
        </Flex>
      </HStack>
    </Box>
  );
};

export default Hero;
