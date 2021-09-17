import React from 'react';
import { useState } from 'react';
import styles from './Home.module.css';
import Header from '../../components/Header/Header';
import HeaderSpacer from '../../components/HeaderSpacer/HeaderSpacer';
import SearchBar from '../../components/SearchBar/SearchBar';
import TagGroup from '../../components/TagGroup/TagGroup';
import { LANGUAGES } from '../../components/lib/languageMap';
import CodeCard from '../../components/CodeCard/CodeCard';
import Navigation from '../../components/Navigation/Navigation';

export default function Home(): JSX.Element {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('html');
  const [searchValue, setSearchValue] = useState<string>('');

  const languageList = Object.values(LANGUAGES);
  const tagLanguageList = languageList.map((language) => {
    return {
      children: language,
      onClick: () => setSelectedLanguage(language),
      active: selectedLanguage === language,
    };
  });

  //Mock cards
  const mockCards = [
    { language: 'js', content: 'const a = 23;', title: 'JS CodeCard' },
    {
      language: 'js',
      content:
        'export default function home(){\n for(int i=0 , i < 10 , i++){\n console.log(i) \n}\n}',
      title: 'JS CodeCard 2',
    },
    {
      language: 'css',
      content: '.container{\n display:grid; \n}',
      title: 'CSS CodeCard',
    },
    // {
    //   language: 'html',
    //   content: '<h1>Hello World!</h1>',
    //   title: 'HTML CodeCard',
    // },
  ];
  //End of MockCards
  const filteredCards = mockCards.filter(
    (cards) => cards.language === selectedLanguage
  );

  const searchedCard = filteredCards.filter(
    (card) => card.title === searchValue
  );

  return (
    <div className={styles.container}>
      <section className={styles.headerSection}>
        <Header className={styles.headerPos}>
          code
          <HeaderSpacer />
          Cards
        </Header>
        <SearchBar
          type="search"
          handleSubmit={() => console.log('Submitted')}
          searchValue={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <TagGroup className={styles.tagGroupPos} tagList={tagLanguageList} />
      </section>
      <section className={styles.cardContainer}>
        {filteredCards &&
          searchValue === '' &&
          filteredCards.map((card) => (
            <CodeCard
              language={card.language}
              content={card.content}
              title={card.title}
            />
          ))}
        {searchedCard &&
          searchedCard.map((card) => (
            <CodeCard
              language={card.language}
              content={card.content}
              title={card.title}
            />
          ))}
        {filteredCards.length === 0 && (
          <section className={styles.warning}>
            <p>!!!SORRY!!! </p>
            <p>You don`t have any {selectedLanguage.toUpperCase()} Cards.</p>
          </section>
        )}
      </section>
      <section>
        <Navigation activeLink="home"></Navigation>
      </section>
    </div>
  );
}
