import { Alert, AlertIcon, Box, Button, Link } from "@chakra-ui/react";
import * as React from "react";
import { useCallback } from "react";
import { SUPPORT_EMAIL } from "../../global";
import { defaultValues } from "../ChordForm";
import { ChordChart } from "./ChordChart";
import { useChart } from "./useChart";

const ErrorFallback: React.FunctionComponent<{
  onReset(): void;
}> = ({ onReset }) => {
  return (
    <Box
      height="100%"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      flex="1"
      gap={4}
    >
      <Alert status="error">
        <AlertIcon />
        <Box>
          Ой, что-то пошло не так при работе с диаграммой. Если ошибка повторится,
          пожалуйста, {" "}
          <Link href={`mailto:${SUPPORT_EMAIL}`}>сообщите нам об этом</Link>. Чтобы решить проблему самостоятельно,
		  попробуйте очистить диаграмму и начать заново.
        </Box>
      </Alert>
      <Button onClick={onReset}>Сбросить настройки</Button>
    </Box>
  );
};

export const ChordResult: React.FunctionComponent = () => {
  const { setChart, chart } = useChart();

  const resetSettings = useCallback(() => {
    setChart({
      chord: chart.chord,
      settings: defaultValues,
    });
    window.location.reload();
  }, [chart.chord, setChart]);

  return (
    
      <ChordChart />

  );
};
