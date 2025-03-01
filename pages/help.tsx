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
      <Heading size="lg" mb={3} id="the-editor" marginTop="30px" fontWeight="600">
        Редактор
      </Heading>
      <Text mb={3}>
        <strong>Добавление аппликатуры аккорда.</strong> Для отметки лада и указания схемы и аппликатуры аккорда, кликните в любом месте схемы гитарного грифа. Для удаления отметки кликните по ней ещё раз.
      </Text>
      <Flex justifyContent="center" marginBottom="10px">
        <Image src={toggleGif} alt="Пример добавления аппликатуры" />
      </Flex>
      <Text mb={3}>
        <strong>Приглушённые и открытые струны.</strong> Если кликнуть в начале лада (за верхним порожком), редактор отметит струну символом «О», что обозначает открытую (не зажатую) струну.
		</Text>
	  <Text mb={3}>
		Чтобы отметить приглушённую струну, кликните по символу «О» ещё раз — редактор заменит его на символ «Х». Если кликнуть по символу «Х» ещё раз, редактор вернёт значок открытой струны.
      </Text>
      <Flex justifyContent="center" marginBottom="10px">
        <Image
          src={silentstringsGif}
          alt="Пример использования приглушённых струн"
        />
      </Flex>
      <Text mb={3}>
        <strong>Баррэ.</strong> Чтобы указать баррэ, зажмите левую кнопку мыши и проведите указатель по всем ладам грифа. При работе на смартфоне свайпните от одной струны к другой.
	  </Text>
	  <Text mb={3}>
		Вы можете указать баррэ любого размера. К примеру, для отметки малого баррэ (на три струны) достаточно провести зажатым указателем мыши или свайпнуть по трём ладам. Редактор позволяет отмечать баррэ на две, три, четыре, пять и шесть струн.
	  </Text>
	  <Text mb={3}>	
		Для удаления баррэ на схеме, кликните на любой лад любой струны.
      </Text>
      <Flex justifyContent="center" marginBottom="10px">
        <Image
          src={barreGif}
          alt="Пример создания диаграммы с баррэ"
        />
      </Flex>
      <Text mb={3}>
        <strong>Подписи к аппликатуре.</strong> Для добавления цифр, обозначающих палец, которым зажимается струна на ладу, кликните по кнопке «Текст» под основным окном редактора. После нажатия на кнопку поверх иконки зажатого лада появится небольшое текстовое поле, в котором можно указать номер пальца.
	  </Text>
	  <Text mb={3}>
		В поле можно вводить цифры и буквы. После окончания ввода текста кликните по кнопке «Ноты» для сохранения изменений и продолжения работы с диаграммой.
      </Text>
      <Flex justifyContent="center" marginBottom="10px">
        <Image
          src={editTextGif}
          alt="Пример добавления текста"
        />
      </Flex>
      <Text mb={3}>
        <strong>Цветовое оформление.</strong> Помимо указания ладов и ввода текста, редактор позволяет изменить цвет элементов диаграммы. Для изменения цвета кликните по кнопке «Цвет» — редактор откроет палитру выбора цветов. 
	  </Text>
      <Text mb={3}>	  
		Вы можете указать любой цвет в рамках цветового диапазона RGB. По окончанию выбора цвета, кликните по кнопке «Ноты» или «Текст» для сохранения изменений.
      </Text>
      <Flex justifyContent="center" marginBottom="10px">
        <Image
          src={editColorsGif}
          alt="Пример работы с текстом"
        />
      </Flex>
      <Text mb={3}>
        <strong>Изменение формы элементов.</strong> Редактор также позволяет изменить форму элементов на схеме. Кликните по кнопке «Форма» под основным окном редактора, чтобы изменить форму отображения элементов.
	  </Text>
	  <Text mb={3}>
		Чтобы вернуть к круглой форме элементов, кликните по иконке несколько раз.
      </Text>
      <Flex justifyContent="center" marginBottom="10px">
        <Image
          src={editShapesGif}
          alt="Пример изменения цветового оформления"
        />
      </Flex>
      <Text mb={3}>
        <strong>Подписи к струнам.</strong> С помощью подписей можно указать номера струн или строй инструмента.
		</Text>
	  <Text mb={3}>
		Чтобы указать подписи к струнам, введите цифры или буквы в одно из текстовых полей рядом со струнами в редакторе. По умолчанию подписи не отображаются.
      </Text>
      <Flex justifyContent="center" marginBottom="10px">
        <Image
          src={labelsGif}
          alt="Пример с баррэ"
        />
      </Flex>
      <Heading size="lg" mb={3} id="the-result-section" marginTop="30px" fontWeight="600">
        Итоговая диаграмма
      </Heading>
      <Text mb={3}>
        В секции результатов отображается итоговая диаграмма, созданная на основе данных и настроек <em>Редактора</em>. Любые изменения параметров и внешнего вида схемы аккорда моментально отображаются на итоговой диаграмме:
      </Text>
      <Flex justifyContent="center" marginBottom="10px">
        <Image src={samplechordGif} alt="Пример созданной диаграммы аккорда" />
      </Flex>
      <Heading size="lg" mb={3} id="the-download-sharing-section" marginTop="30px" fontWeight="600">
        Скачивание и расшаривание в социальных сетях
      </Heading>
      <Text mb={3}>
        В секции скачивания отображаются несколько вариантов для сохранения результатов. Диаграммы экспортируются в виде изображений в форматах SVG или PNG.
		</Text>
	  <Text mb={3}>
		При скачивании изображения в формате PNG сервис предлагает несколько размеров диаграммы. Несмотря на подпись о разрешении изображения, итоговая высота картинки напрямую зависит от расширенных настроек: количества струн, подписей, их размеров и других параметров.
		</Text>
	  <Text mb={3}>
		В отличие от высоты, ширина изображения зафиксирована и не меняется исходя из заданных настроек.
      </Text>
      <Text mb={3}>
        Сервис также позволяет поделиться созданной диаграммой. Так, например, можно сгенерировать прямую ссылку на аккорд, чтобы поделиться ей с другими людьми.
		</Text>
	  <Text mb={3}>
		<em>Ссылка содержит ряд дополнительных параметров</em>, благодаря чему открывший её пользователь увидит не только саму диаграмму, но и все настройки редактора. Пользователь, открывший схему по ссылке, сможет скачать диаграмму в форматах SVG и PNG, а также изменить её.
		</Text>
	  <Text mb={3}>
		Помимо прямых ссылок сервис позволяет поделиться диаграммой в социальных сетях и мессенджерах. Принцип системы аналогичен: перешедший по ссылке пользователь увидит диаграмму и все заданные в редакторе параметры, а также сможет изменить схему по своему желанию.
      </Text>
    </>
  );
};

export default HelpPage;
