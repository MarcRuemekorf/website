import { VStack, Text } from "@chakra-ui/react";
import Header from "@/components/ui/header/Header";
import Footer from "@/components/ui/footer/Footer";
import MotionElement from "@/components/ui/MotionElement";
import TypewriterText from "@/components/ui/TypewriterText";

export default function Home() {

  return (
    <VStack h="100vh">
      <Header />
      <VStack as="main" h="full" flex="1" justify="center">
        <MotionElement
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
              duration: 0.4,
              y: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
          }}
        >
          <Text fontSize="2xl" fontWeight="bold">
            Hello World!
          </Text>
        </MotionElement>
        <TypewriterText texts={["Welcome to my website!", "Enjoy your stay!"]} />
      </VStack>
      <Footer />
    </VStack>
  );
}
