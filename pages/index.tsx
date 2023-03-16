import { RepeatIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Grid,
  GridItem,
  Heading,
  IconButton,
  Link,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import type { NextPage } from "next";
import { useCallback } from "react";
import { Orientation } from "svguitar";
import { ChordEditor } from "../components/chord/ChordEditor";
import { ChordResult } from "../components/chord/ChordResult";
import { useChart } from "../components/chord/useChart";
import { AdjustableChordSettings, ChordForm } from "../components/ChordForm";
import { DownloadButtons } from "../components/DownloadButtons";
import { ShareButtons } from "../components/ShareButtons";
import { useIsClient } from "../hooks/use-is-client";
import { useResizeHandler } from "../hooks/use-resize-handler";
import { GA } from "../services/google-analytics";

const Home: NextPage = () => {
  const { width, height } = useResizeHandler();
  const borderColor = useColorModeValue("black", "white");
  const { setChart, chart } = useChart();

  const isClient = useIsClient();

  const onSettings = useCallback(
    (newSettings: AdjustableChordSettings) =>
      setChart({
        chord: chart.chord,
        settings: {
          ...chart.settings,
          ...newSettings,
        },
      }),
    [chart.chord, chart.settings, setChart]
  );

  return (
    <>
      <Heading as="h1">Генератор диаграмм гитарных аккордов</Heading>
      <Text mt={4} fontSize="lg">
        Создание диаграмм ещё никогда не было таким простым и быстрым! Для начала работы нажмите в любом месте на схеме гитарного грифа в{" "}
        <Link href="#editor">
          <i>редакторе</i>
        </Link>{" "}
        — введённые данные сразу же отобразятся{" "}
        <Link href="#result">
          <i>на диаграмме</i>
        </Link>{" "}
         в соседнем окне.<br />
		 Созданную диаграмму можно <Link href="#download">скачать</Link> или{" "}
        <Link href="#share">поделиться ей в социальных сетях</Link>.
      </Text>
      {isClient && (
        <>
          <ChordForm settings={chart.settings} onSettings={onSettings} />
          <Grid
            templateColumns={[
              "repeat(1, 1fr)",
              "repeat(1, 1fr)",
              "repeat(2, 1fr)",
              "repeat(2, 1fr)",
            ]}
            gap={6}
            mt={8}
          >
            <GridItem
              borderRadius="xl"
              borderColor="primary"
              borderStyle="solid"
              borderWidth="2px"
              display="block"
            >
              <Box p={3} id="editor" position="relative">
                <Heading
                  as="h2 editor"
                  size="15px"
                  transform={[null, null, null, "rotate(-45deg)"]}
                  transformOrigin="0 0"
                  position={[null, null, null, "relative"]}
                  top="46px"
                  left="-5px"
                  display="inline-block"
				  fontWeight={500}
                >
                  Редактор
                </Heading>
                <Center>
                  <ChordEditor
                    numFrets={chart.settings.frets ?? 5}
                    numStrings={chart.settings.strings ?? 6}
                    chord={chart.chord}
                    settings={chart.settings}
                    onChart={setChart}
                    width={width * 0.9}
                    height={height * 0.6}
                  />
                </Center>
              </Box>
            </GridItem>
            <GridItem
              borderRadius="xl"
              borderColor={borderColor}
              borderStyle="solid"
              borderWidth="2px"
              display="block"
            >
              <Box p={3} id="result" height="100%" position="relative">
                <Heading
                  as="h2 result"
                  size="15px"
                  transform={[null, null, null, "rotate(-45deg)"]}
                  transformOrigin="0 0"
                  position={[null, null, null, "relative"]}
                  top="46px"
                  left="-5px"
                  display="inline-block"
				  fontWeight={500}
                >
                  Диаграмма
                </Heading>
                <Tooltip
                  placement="top"
                  label="Повернуть диаграмму"
                  aria-label="Повернуть диаграмму"
                  hasArrow={true}
                >
                  <IconButton
                    position="absolute"
                    right={3}
                    top={3}
                    aria-label="Повернуть диаграмму"
                    variant="outline"
                    icon={<RepeatIcon />}
                    onClick={() => {
                      GA()?.("event", "rotate_chord_diagram");
                      setChart({
                        ...chart,
                        settings: {
                          ...chart.settings,
                          orientation:
                            chart.settings.orientation ===
                            Orientation.horizontal
                              ? Orientation.vertical
                              : Orientation.horizontal,
                        },
                      });
                    }}
                  />
                </Tooltip>
                <ChordResult />
              </Box>
            </GridItem>
          </Grid>
        </>
      )}
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
          <DownloadButtons title={chart.settings.title} />
        </GridItem>
        <GridItem>
          <ShareButtons chart={chart} />
        </GridItem>
      </Grid>
    </>
  );
};

export default Home;
