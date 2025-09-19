import React from "react";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import MotionElement from "@/components/ui/MotionElement";
import gradientText from "@/components/ui/gradientText";
import Logo from "@/components/ui/header/Logo";

interface HeroProps {
  title?: string;
  subtitle?: string;
}

const Hero: React.FC<HeroProps> = () => {
  return (
    <Box as="section" h="full" maxH="100dvh" maxW="full" p="3rem">
      <VStack h="full">
        <HStack w="full" gap="2rem" justify="space-between" align="start">
          <Logo />
          <MotionElement
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              y: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
          >
            <Text fontSize="md" sm={{ fontSize: "2xl" }} maxW="32ch">
              Sinds 2022 goed op mijn plek als developer bij de zelfsturende
              organisatie Enrise in Amersfoort
            </Text>
          </MotionElement>
        </HStack>
        <Box w="full" mt="auto">
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
              fontSize="5xl"
              sm={{ fontSize: "7xl" }}
              lg={{ fontSize: "8xl" }}
              xl={{ fontSize: "9xl" }}
              lineHeight="1.15"
              maxW="16ch"
              textStyle="italic"
            >
              <Text as={gradientText} fontWeight="bold" color="gray.400">
                Front-end developer
              </Text>{" "}
              met een achtergrond in{" "}
              <Text as={gradientText} fontWeight="bold" color="gray.400">
                design
              </Text>
            </Text>
          </MotionElement>
        </Box>
      </VStack>
    </Box>
  );
};

export default Hero;