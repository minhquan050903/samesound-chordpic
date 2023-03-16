import {
  Box,
  Button,
  Container,
  Flex,
  GridItem,
  Icon,
  Link,
  Spacer,
  useColorModeValue,
} from "@chakra-ui/react";
import { TelegramIcon, VKIcon } from "react-share";
import { FaTelegram, FaVk } from "react-icons/fa";

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
          <Button size="sm" variant="footer-tg">
                <Icon as={FaTelegram} mr={1} width={4} height={4} />
           </Button>
        </Link>
        <Link
          href="https://vk.com/samesound"
          display="flex"
          alignItems="center"
          gap={2}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button size="sm" variant="footer-vk">
            <Icon as={FaVk} mr={1} width={4} height={4} />
            </Button>
        </Link>
        <Spacer />
        <Link href="/about">О проекте</Link>
        <Link href="/terms">Условия использования</Link>
        <Link href="/privacy-notice">Политика конфиденциальности</Link>
      </Container>
    </GridItem>
  );
};
