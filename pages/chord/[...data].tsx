import {
  Button,
  Grid,
  GridItem,
  Heading,
  Spinner,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ChordResult } from "../../components/chord/ChordResult";
import { useChart } from "../../components/chord/useChart";
import { DownloadButtons } from "../../components/DownloadButtons";
import { ShareButtons } from "../../components/ShareButtons";
import { Chart } from "../../domain/chart";
import { decompress } from "../../hooks/compressed-state";

const ChordPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();
  const { data } = router.query;

  const { setChart, chart } = useChart();

  useEffect(() => {
    const compressed = data && data.length ? data[0] : data;

    if (typeof compressed !== "string") {
      setIsLoading(false);
      return;
    }

    const loadedChart = decompress<Chart>(compressed);
    if (!loadedChart) {
      setIsLoading(false);
      return;
    }

    setChart(loadedChart);
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (!isLoading) {
    <Spinner />;
  }

  if (!chart) {
    return (
      <>
        <Heading size="lg">Неверная ссылка</Heading>
        <Text>
          К сожалению, ссылка, по которой вы перешли, некорректна. Проверьте правильность введённого адреса.
        </Text>

        <Text>
          Если ссылка правильная, то всё, что вы сейчас можете — это{" "}
          <Link href="/">вернуться на главную и создать новую диаграмму</Link>.
        </Text>
      </>
    );
  }

  return (
    <Grid
      templateColumns={[
        "repeat(1, 1fr)",
        "repeat(1, 1fr)",
        "repeat(2, 1fr)",
        "repeat(2, 1fr)",
      ]}
      gap={6}
    >
      <GridItem>
        <ChordResult />
      </GridItem>
      <GridItem>
        <DownloadButtons />
        <ShareButtons chart={chart} />
        <Heading as="h2" size="lg" mb={3} mt={8} fontWeight="500">
          Нужно что-то поменять?
        </Heading>
        <Link href="/" passHref legacyBehavior>
          <Button as="a" size="md" variant="solid">
            Изменить диаграмму
          </Button>
        </Link>
      </GridItem>
    </Grid>
  );
};

export default ChordPage;
