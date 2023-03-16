import {
  ChevronDownIcon,
  ChevronUpIcon,
  DeleteIcon,
  QuestionIcon,
} from "@chakra-ui/icons";
import {
  Box,
  Button,
  Checkbox,
  Collapse,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useDeferredValue, useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { ChordSettings, ChordStyle, Orientation } from "svguitar";
import { SubscriptionType } from "../types";
import { useSubscription } from "../utils/useSubscription";
import { ColorInput } from "./ColorInput";
import { SliderWithTooltip } from "./SliderWithTooltip";
import { GA } from '../services/google-analytics'

export type AdjustableChordSettings = Pick<
  ChordSettings,
  | "orientation"
  | "frets"
  | "strings"
  | "position"
  | "title"
  | "style"
  | "fretSize"
  | "fingerSize"
  | "fingerTextSize"
  | "strokeWidth"
  | "color"
  | "backgroundColor"
  | "fixedDiagramPosition"
  | "noPosition"
>;

export const defaultValues: AdjustableChordSettings = {
  orientation: Orientation.vertical,
  title: "",
  frets: 5,
  strings: 6,
  position: 1,
  style: ChordStyle.normal,
  fretSize: 1.5,
  fingerSize: 0.65,
  fingerTextSize: 24,
  strokeWidth: 2,
  backgroundColor: undefined,
  color: undefined,
  fixedDiagramPosition: false,
};

export const ChordForm: React.FunctionComponent<{
  onSettings(settings: AdjustableChordSettings): void;
  settings: AdjustableChordSettings;
}> = ({ onSettings, settings }) => {
  const { isOpen, onToggle } = useDisclosure();
  const subscription = useSubscription();

  const {
    register,
    watch,
    control,
    formState: { errors },
    reset,
    setValue,
  } = useForm<AdjustableChordSettings>({
    mode: "onChange",
    defaultValues: settings,
  });
  const [data, setData] = useState<AdjustableChordSettings>(settings);

  watch(setData);

  const deferredValue = useDeferredValue(data);

  useEffect(() => {
    // iterate through form data and replace invalid values with default values.
    // Unfortunately use-form-hooks always triggers the watch callback even if values are invalid
    const validData = Object.entries(deferredValue).reduce(
      (acc, [key, value]) => {
        return {
          ...acc,
          [key]:
            key in errors || (typeof value === "number" && isNaN(value))
              ? defaultValues[key as keyof AdjustableChordSettings]
              : value,
        };
      },
      {}
    ) as AdjustableChordSettings;

    onSettings(validData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [deferredValue, errors]);

  useEffect(() => {
    setValue("orientation", settings.orientation);
  }, [setValue, settings.orientation]);

  useEffect(() => {
    if (isOpen) {
      GA()?.("event", "toggled_more_settings");
    }
  }, [isOpen]);

  const resetSettings = () => {
    GA()?.("event", "reset_settings");
    reset(defaultValues);
  };

  return (
    <>
      <SimpleGrid columns={[1, 2, 4, 4]} mt={10} gap={4}>
        <Box>
          <FormControl isInvalid={!!errors.title}>
            <FormLabel>
              Название аккорда
              <Input
                placeholder="Amaj7..."
                {...register("title", {
                  maxLength: {
                    value: 300,
                    message: "Название слишком длинное",
                  },
                })}
              />
            </FormLabel>
            {errors.title?.message && (
              <FormErrorMessage>{errors.title?.message}</FormErrorMessage>
            )}
          </FormControl>
        </Box>
        <Box>
          <FormControl isInvalid={!!errors.position}>
            <FormLabel>
              Первый лад
              <Input
                placeholder="Стартовый лад..."
                {...register("position", {
                  valueAsNumber: true,
                  min: {
                    value: 1,
                    message: "Начальный лад должен быть числом",
                  },
                  max: 50,
                })}
                type="number"
              />
            </FormLabel>
            {errors.position?.message && (
              <FormErrorMessage>{errors.position?.message}</FormErrorMessage>
            )}
          </FormControl>
        </Box>
        <Box>
          <FormControl isInvalid={!!errors.frets}>
            <FormLabel>
              Лады
              <Input
                placeholder="5..."
                {...register("frets", {
                  valueAsNumber: true,
                  min: {
                    value: 1,
                    message: "Хотя бы один лад точно должен быть :)",
                  },
                  max: {
                    value: 50,
                    message: "Слишком много ладов!",
                  },
                })}
                type="number"
              />
            </FormLabel>
            {errors.frets?.message && (
              <FormErrorMessage>{errors.frets?.message}</FormErrorMessage>
            )}
          </FormControl>
        </Box>
        <Box>
          <FormControl isInvalid={!!errors.strings}>
            <FormLabel>
              Струны
              <Input
                placeholder="6..."
                {...register("strings", {
                  valueAsNumber: true,
                  min: {
                    value: 2,
                    message: "Должно быть не менее двух струн",
                  },
                  max: {
                    value: 50,
                    message: "Слишком много струн!",
                  },
                })}
                type="number"
              />
            </FormLabel>
            {errors.strings?.message && (
              <FormErrorMessage>{errors.strings?.message}</FormErrorMessage>
            )}
          </FormControl>
        </Box>
      </SimpleGrid>

      <Collapse
        in={isOpen}
        animateOpacity
        style={isOpen ? { overflow: "visible" } : {}}
      >
        <SimpleGrid columns={[1, 2, 4, 4]} mt={5} gap={4}>
          <Box>
            <FormControl isInvalid={!!errors.style}>
              <FormLabel>
                Оформление
                <Select {...register("style")}>
                  <option value={ChordStyle.normal}>Обычное</option>

                  {subscription === SubscriptionType.PRO && (
                    <option value={ChordStyle.handdrawn}>Рисованное</option>
                  )}
                  {subscription !== SubscriptionType.PRO && (
                    <option disabled>Рисованное (Pro)</option>
                  )}
                </Select>
              </FormLabel>
              {errors.style?.message && (
                <FormErrorMessage>{errors.style?.message}</FormErrorMessage>
              )}
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>
                Ориентация
                <Select {...register("orientation")}>
                  <option value={Orientation.vertical}>Вертикальная</option>
                  <option value={Orientation.horizontal}>Горизонтальная</option>
                </Select>
              </FormLabel>
              {errors.orientation?.message && (
                <FormErrorMessage>
                  {errors.orientation?.message}
                </FormErrorMessage>
              )}
            </FormControl>
          </Box>
          <Box display="flex" alignItems="center">
            <Checkbox {...register("fixedDiagramPosition")}>
              Фиксированная позиция
              <Tooltip
                placement="top"
                label="Отметьте, чтобы расстояние между диаграммой и названием аккорда всегда было одинаковым."
                aria-label="Отметьте, чтобы расстояние между диаграммой и названием аккорда всегда было одинаковым."
                hasArrow={true}
              >
                <QuestionIcon ml={2} />
              </Tooltip>
            </Checkbox>
          </Box>
          <Box display="flex" alignItems="center">
            <Checkbox {...register("noPosition")}>
              Скрыть позицию
              <QuestionIcon ml={2} />
            </Checkbox>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>
                Высота
                <Controller
                  control={control}
                  name="fretSize"
                  render={({ field }) => (
                    <SliderWithTooltip
                      aria-label="Высота диаграммы аккорда"
                      min={0.7}
                      max={5}
                      step={0.05}
                      {...field}
                    />
                  )}
                ></Controller>
              </FormLabel>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>
                Размер аппликатуры
                <Controller
                  control={control}
                  name="fingerSize"
                  render={({ field }) => (
                    <SliderWithTooltip
                      aria-label="Диаметр аппликатуры на струне"
                      min={0.5}
                      max={2}
                      step={0.01}
                      {...field}
                    />
                  )}
                ></Controller>
              </FormLabel>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>
                Размер шрифта
                <Controller
                  control={control}
                  name="fingerTextSize"
                  render={({ field }) => (
                    <SliderWithTooltip
                      aria-label="Размер шрифта аппликатуры аккорда"
                      min={10}
                      max={50}
                      step={1}
                      {...field}
                    />
                  )}
                ></Controller>
              </FormLabel>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>
                Ширина линий
                <Controller
                  control={control}
                  name="strokeWidth"
                  render={({ field }) => (
                    <SliderWithTooltip
                      aria-label="Ширина линий"
                      min={1}
                      max={10}
                      step={0.1}
                      {...field}
                    />
                  )}
                ></Controller>
              </FormLabel>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>
                Цвет
                <Controller
                  control={control}
                  name="color"
                  render={({ field }) => (
                    <ColorInput onChange={field.onChange} value={field.value} />
                  )}
                ></Controller>
              </FormLabel>
            </FormControl>
          </Box>
          <Box>
            <FormControl>
              <FormLabel>
                Фоновый цвет
                <Controller
                  control={control}
                  name="backgroundColor"
                  render={({ field }) => (
                    <ColorInput onChange={field.onChange} value={field.value} />
                  )}
                ></Controller>
              </FormLabel>
            </FormControl>
          </Box>
          <Box></Box>
          <Flex alignItems="flex-end" justify="flex-end">
            <FormLabel as="div">
              <Button
                variant="outline-clear"
                display="flex"
                gap={2}
                onClick={resetSettings}
              >
                <DeleteIcon />
                Сбросить настройки
              </Button>
            </FormLabel>
          </Flex>
        </SimpleGrid>
      </Collapse>
      <Button variant="ghost-shadow" onClick={onToggle}>
        {isOpen ? (
          <ChevronUpIcon boxSize={6} />
        ) : (
          <ChevronDownIcon boxSize={6} />
        )}
        {isOpen ? "Меньше" : "Больше"} настроек
      </Button>
    </>
  );
};
