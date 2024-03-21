import cx from 'classnames';

import { Card } from '@igoryusha22/promo-ui/Card';
import { CardGroup } from '@igoryusha22/promo-ui/CardGroup';

import { Text } from '@igoryusha22/promo-ui/Text';
import { TextGroup } from '@igoryusha22/promo-ui/TextGroup';

import { getArticlesMetadata } from './getSortedArticlesData';

const Articles = async () => {
  const articles = (await getArticlesMetadata()) || [];

  return (
    <>
      <Text className="mb-4" as="h2" size="2xl" weight="black">
        Статьи
      </Text>

      <TextGroup>
        <Text as="p" size="lg">
          Пока эта страница пустая болванка, но возможно, совсем скоро, тут
          появится что-то стоящее 😉.
        </Text>

        {/* <Text as="div" size="lg">
          Я пишу по 2 причинам:
          <ol className="list-decimal list-inside">
            <li>
              Многие статьи не содержат проблем, с которыми я сталкивался на
              моем пути, а их гугление могло занимать часы (и много часов),
              поэтому я возвожу себе в предназначение – сделать так, чтобы в
              интернете был ресурс, который сможет сэкономить кому-то время;
            </li>

            <li>
              Многие статьи написаны &quot;узколобо&quot;, то есть так, что
              приходится читать еще статьи чтобы сформировать общее
              представление о чем-то.
            </li>
          </ol>
        </Text>

        <Text as="p" size="lg">
          Однажды отец сказал мне – &quot;Ты не знаешь что-то, пока не сможешь
          это что-то объяснить&quot;. С тех пор умение объяснять стало моим
          главным оценочным фактором моего обучения.
        </Text>

        <Text as="p" size="lg">
          Я считаю что у меня отлично получается объяснять так, чтобы многие
          поняли, даже что-то сложное. Сначала это было на моей работе, сейчас я
          хочу чтобы это было в моих статьях.
        </Text>
        */}
      </TextGroup>

      <CardGroup className={cx('mt-12')}>
        {articles.map((article) => {
          const { id, title, description } = article;

          return (
            <Card
              key={id}
              href={`/articles/${id}`}
              title={title}
              description={description}
              cta="Читать статью"
            />
          );
        })}
      </CardGroup>
    </>
  );
};

export default Articles;
