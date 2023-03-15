import { Flex, Heading, Text } from "@chakra-ui/react";
import { GetStaticPropsResult } from "next";
import Image from "next/image";

import barreGif from "../public/images/barre.gif";
import editColorsGif from "../public/images/edit-colors.gif";
import editShapesGif from "../public/images/edit-shapes.gif";
import editTextGif from "../public/images/edit-text.gif";
import labelsGif from "../public/images/labels.gif";
import samplechordGif from "../public/images/samplechord.png";
import silentstringsGif from "../public/images/silentstrings.gif";
import toggleGif from "../public/images/toggle.gif";

interface Props {
  title: string;
  description: string;
}

export async function getStaticProps(): Promise<GetStaticPropsResult<Props>> {
  return {
    props: {
      title: "Помощь",
      description:
        "Learn how to create guitar chord diagrams with ChordPic. Don't worry, it's super easy!",
    },
  };
}

const HelpPage = () => {
  return (
    <>
      <Heading size="2xl" mb={6}>
        Руководство пользователя
      </Heading>
      <Text mb={3}>
        Если вы ещё не разобрались, что к чему, то этот раздел расскажет, как пользоваться сервисом. Вы узнаете, как создать диаграмму гитарного аккорда, сохранить её в SVG или PNG и поделиться созданной схемой в социальных сетях. Не переживайте, всё очень просто!
      </Text>
      <Text mb={3}>
        Сервис состоит из трёх основных секций: <em>Редактора диаграмм</em>, <em>Окна готовой диаграммы</em> и секции <em>Скачивания и расшаривания в социальных сетях</em>.
      </Text>
      <Text mb={3}>	  
		Как понятно из названия, <em>Редактор диаграмм</em> отвечает за создание схем аккордов. Любые изменения вносятся именно здесь. Редактор предлагает дополнительные настройки, подробнее о которых мы поговорим ниже.
      </Text>
      <Text mb={3}>
		В <em>Окне готовой диаграммы</em>, обозначенном в интерфейсе надписью <em>Диаграмма</em>, отображается итоговая версия схемы.
      </Text>
      <Text mb={3}>
		В секции <em>Скачивания и расшаривания в социальных сетях</em> находятся кнопки скачивания диаграммы в различных форматах, а также кнопки социальных сетей — с их помощью диаграммой можно поделиться с друзьями, коллегами или учениками.
      </Text>
      <Heading size="lg" mb={3} id="the-editor">
        Редактор
      </Heading>
      <Text mb={3}>
        <strong>Добавление аппликатуры аккорда</strong>: Simply click anywhere you
        want the finger to appear. To remove the finger, just click on it again
        and it will disappear.
      </Text>
      <Flex justifyContent="center">
        <Image src={toggleGif} alt="Example of adding and removing fingers" />
      </Flex>
      <Text mb={3}>
        <strong>Приглушённые и открытые струны</strong>: If there is no finger
        on a string, an &apos;O&apos; automatically appears above the string
        (open string). If you want to change that to an &apos;X&apos;
        (don&apos;t play that string) simply click on the &apos;O&apos; to make
        it an &apos;X&apos;. When you click it again it will change back to an
        &apos;O&apos;.
      </Text>
      <Flex justifyContent="center">
        <Image
          src={silentstringsGif}
          alt="Example of toggling strings from do not play to open"
        />
      </Flex>
      <Text mb={3}>
        <strong>Баррэ</strong>: To add a barre chord, you can
        simply connect the strings with the mouse or if you&apos;re on mobile
        you can swipe from one string to another with your finger. To remove the
        bare chord simply click anywhere on the fret with the barre chord to
        remove it.
      </Text>
      <Flex justifyContent="center">
        <Image
          src={barreGif}
          alt="Example of adding and removing a barre chord"
        />
      </Flex>
      <Text mb={3}>
        <strong>Подписи к аппликатуре</strong>: To add text
        to any finger or barre chords, first click the &quot;Edit Text&quot;
        button at the bottom of the editor to reveal a text field on top of each
        finger and barre chord. You can now simply add or edit any text on each
        finger or barre chord. When you&apos;re done you can click on the
        &quot;Edit Notes&quot; button to continue editing the notes.
      </Text>
      <Flex justifyContent="center">
        <Image
          src={editTextGif}
          alt="Example of adding and editing text on fingers and barre chords"
        />
      </Flex>
      <Text mb={3}>
        <strong>Цветовое оформление</strong>: Changing
        colors of fingers and barre chords works just like editing text. After
        you added your fingers and barre chords click on the &quot;Edit
        Colors&quot; button at the bottom of the editor section. After that,
        click on any finger or barre chord to reveal a color picker where you
        can pick your desired color.
      </Text>
      <Flex justifyContent="center">
        <Image
          src={editColorsGif}
          alt="Example of adding and editing text on fingers and barre chords"
        />
      </Flex>
      <Text mb={3}>
        <strong>Изменение формы элементов</strong>: After you added your
        fingers to the fret board click the &quot;Edit Shapes&quot; button at
        the bottom of the editor section. After that, click on any finger to
        change its shape. To revert the shape to a circle, keep clicking the
        finger until the shape is a circle again.
      </Text>
      <Flex justifyContent="center">
        <Image
          src={editShapesGif}
          alt="Example of changing the shape of a finger"
        />
      </Flex>
      <Text mb={3}>
        <strong>Подписи к струнам</strong>: To label the strings you can
        enter any letters or numbers below the strings. By default the strings
        are not labelled.
      </Text>
      <Flex justifyContent="center">
        <Image
          src={labelsGif}
          alt="Example of adding and removing a barre chord"
        />
      </Flex>
      <Heading size="lg" mb={3} id="the-result-section">
        Итоговая диаграмма
      </Heading>
      <Text mb={3}>
        The result section gives you a preview of what your chart image will
        look like. All changes made in the editor section are immediately
        visible in the result section. Sample chart:
      </Text>
      <Flex justifyContent="center">
        <Image src={samplechordGif} alt="Example chord chart" />
      </Flex>
      <Heading size="lg" mb={3} id="the-download-sharing-section">
        Скачивание и расшаривание в социальных сетях
      </Heading>
      <Text mb={3}>
        In the download section you can download your chord chart as an image.
        You can export the image as an SVG or PNG image. When you download a PNG
        image, you have to chose between different resolutions. The height of
        the images can vary and depend on what your chart looks like. The width
        will always stay the same though, no matter what your chart looks like.
      </Text>
      <Text mb={3}>
        In the share section you can generate a link that you can share with
        other people. All your settings and the whole chart are saved{" "}
        <em>in that link</em>. The sharing section also allows you to share your
        charts on many different platforms or messengers.
      </Text>
    </>
  );
};

export default HelpPage;
