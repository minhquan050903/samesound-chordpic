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
import { useEffect, useRef, useState } from "react";
import { FaTelegram, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { MdFacebook, MdShare, MdEmail } from "react-icons/md";
import {
  EmailShareButton,
  FacebookShareButton,
  TelegramShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { Chart } from "../domain/chart";
import { getLink } from "../hooks/url-state";

interface IProps {
  chart: Chart;
}

export const ShareButtons = ({ chart }: IProps) => {
  const [link, setLink] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    setLink(null);
  }, [JSON.stringify(chart)]);

  function share() {
    const url = getLink(chart, "/chord");

    setLink(url);

    return new Promise((resolve) => {
      setTimeout(resolve, 300);
    });
  }

  const title = `ChordPic.com | ${chart.settings.title || "Unnamed Chord"}`;

  const copyLink = () => {
    if (inputRef.current) {
      inputRef.current.select();
      document.execCommand("copy");
    }
  };

  return (
    <Box mt={8} id="share">
      <Heading as="h2" size="lg" mb={3}>
        Share
      </Heading>
      <Button variant="outline" onClick={share}>
        <Icon as={MdShare} />
        Generate Sharing Link
      </Button>

      {link && (
        <>
          <InputGroup size="md" mt={3}>
            <Input
              ref={inputRef}
              pr="4.5rem"
              aria-label="Sharing Link"
              readOnly={true}
              value={link}
              type="text"
            />
            <InputRightElement width="4.5rem">
              <Button h="1.75rem" size="sm" onClick={copyLink}>
                Copy
              </Button>
            </InputRightElement>
          </InputGroup>

          <Flex wrap="wrap" gap={1} mt={3}>
            <FacebookShareButton url={link}>
              <Button size="sm" variant="outline">
                <Icon as={MdFacebook} />
                Facebook
              </Button>
            </FacebookShareButton>

            <TelegramShareButton url={link} title={title}>
              <Button size="sm" variant="outline">
                <Icon as={FaTelegram} />
                Telegram
              </Button>
            </TelegramShareButton>

            <TwitterShareButton
              url={link}
              title={title}
              via="https://chordpic.com"
              hashtags={["guitar", "chord"]}
            >
              <Button size="sm" variant="outline">
                <Icon as={FaTwitter} />
                Twitter
              </Button>
            </TwitterShareButton>

            <WhatsappShareButton url={link} title={title}>
              <Button size="sm" variant="outline">
                <Icon as={FaWhatsapp} />
                WhatsApp
              </Button>
            </WhatsappShareButton>

            <EmailShareButton
              subject={title}
              url={link}
              body="Here's a chord chart I created on ChordPic.com"
            >
              <Button size="sm" variant="outline">
                <Icon as={MdEmail} />
                Email
              </Button>
            </EmailShareButton>
          </Flex>
        </>
      )}
    </Box>
  );
};
