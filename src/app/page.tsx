import Image from "next/image";
import styles from "./page.module.css";
import { HStack, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <VStack>
      <HStack width="full" align="left" justify="space-between" p="1rem" as="header">
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        Header
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
