import {
  Box,
  Container,
  Flex,
  GridItem,
  Link,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { TelegramIcon, VKIcon } from "react-share";

export const Footer = () => {
  const bg = useColorModeValue("gray.100", "gray.900");

  return (
    <GridItem as="footer" bg={bg} display="flex" py={[8, 8, 4]}>
      <Container
        maxW="container.lg"
        display="flex"
        gap={5}
        flexDirection={["column", "column", "row"]}
      >
        <Link
          href="https://t.me/samesound"
          display="flex"
          alignItems="center"
          gap={2}
          rel="noopener noreferrer"
          target="_blank"
        >
          <TelegramIcon borderRadius={100} size="1.5em" /> 
        </Link>
        <Link
          href="https://vk.com/samesound"
          display="flex"
          alignItems="center"
          gap={2}
          rel="noopener noreferrer"
          target="_blank"
        >
          <VKIcon borderRadius={100} size="1.5em" /> 
        </Link>
        <Spacer />
        <Link href="/about">О проекте</Link>
        <Link href="/terms">Условия использования</Link>
        <Link href="/privacy-notice">Политика конфиденциальности</Link>
      </Container>
    </GridItem>
  );
};
