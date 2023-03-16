import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useEffect, useMemo, useRef, useState } from "react";
import { FaTelegram, FaTwitter, FaWhatsapp, FaOdnoklassniki, FaVk, FaCopy } from "react-icons/fa";
import { MdFacebook, MdEmail, MdIosShare } from "react-icons/md";
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  VKShareButton,
  OKShareButton,
  MailruShareButton
} from "react-share";
import { Chart } from "../domain/chart";
import { getLink } from "../hooks/url-state";
import { GA } from '../services/google-analytics'

interface IProps {
  chart: Chart;
}

export const ShareButtons = ({ chart }: IProps) => {
  const [link, setLink] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const chartJson = useMemo(() => JSON.stringify(chart), [chart]);

  useEffect(() => {
    setLink(null);
  }, [chartJson]);

  function share() {
    GA()?.("event", "generate_share_link");
    const url = getLink(chart, "/chord");

    setLink(url);

    return new Promise((resolve) => {
      setTimeout(resolve, 300);
    });
  }

  const title = `Генератор диаграмм SAMESOUND | ${chart.settings.title || "Аккорд без названия"}`;

  const copyLink = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
    }
  };

  return (
    <Box mt={8} id="share">
      <Heading as="h2" size="1.65rem" mb={2} fontWeight="500">
        Поделиться
      </Heading>
      <Button variant="outline" onClick={share}>
        <Icon as={MdIosShare} mr={1} />
        Ссылка на диаграмму
      </Button>

      {link && (
        <>
          <InputGroup size="md" mt={3}>
            <Input
              ref={inputRef}
              pr="4.5rem"
              aria-label="Ссылка на диаграмму"
              readOnly={true}
              value={link}
              type="text"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={copyLink}>
                <Icon as={FaCopy} mr={1} />
              </Button>
            </InputRightElement>
          </InputGroup>

          <Flex wrap="wrap" gap={1} mt={3}>
            <VKShareButton url={link}>
              <Button size="sm" variant="share-vk">
                <Icon as={FaVk} mr={1} width={4} height={4} />
                VK
              </Button>
            </VKShareButton>            
            
            <TelegramShareButton url={link} title={title}>
              <Button size="sm" variant="share-tg">
                <Icon as={FaTelegram} mr={1} width={4} height={4} />
                Телеграм
              </Button>
            </TelegramShareButton>
            
            <FacebookShareButton url={link}>
              <Button size="sm" variant="share-fb">
                <Icon as={MdFacebook} mr={1} width={4} height={4} />
                Фейсбук
              </Button>
            </FacebookShareButton>

            <TwitterShareButton
              url={link}
              title={title}
              via="https://guitardiagrams.samesound.ru"
              hashtags={["аккорд", "гитара"]}
            >
              <Button size="sm" variant="share-tw">
                <Icon as={FaTwitter} mr={1} width={4} height={4} />
                Твиттер
              </Button>
            </TwitterShareButton>
            
            <OKShareButton url={link}>
              <Button size="sm" variant="share-ok">
                <Icon as={FaOdnoklassniki} mr={1} width={4} height={4} />
                OK
              </Button>
            </OKShareButton> 

            <WhatsappShareButton url={link} title={title}>
              <Button size="sm" variant="share-ws">
                <Icon as={FaWhatsapp} mr={1} width={4} height={4} />
                WhatsApp
              </Button>
            </WhatsappShareButton>

            <EmailShareButton
              subject={title}
              url={link}
              body="Диаграмма аккорда, которую я создал в генераторе диаграмм SAMESOUND"
            >
              <Button size="sm" variant="share-em">
                <Icon as={MdEmail} mr={1} width={4} height={4} />
                Email
              </Button>
            </EmailShareButton>
          </Flex>
        </>
      )}
    </Box>
  );
};
