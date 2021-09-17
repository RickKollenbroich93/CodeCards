import React from 'react';
import { useState } from 'react';
import styles from './Collections.module.css';
import Header from '../../components/Header/Header';
import HeaderSpacer from '../../components/HeaderSpacer/HeaderSpacer';
import SearchBar from '../../components/SearchBar/SearchBar';
import TagGroup from '../../components/TagGroup/TagGroup';
import { LANGUAGES } from '../../components/lib/languageMap';
import Navigation from '../../components/Navigation/Navigation';
import AddButton from '../../components/Buttons/AddButton/AddButton';
import SubHeader from '../../components/Header/SubHeader/SubHeader';

export default function Collections(): JSX.Element {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('html');
  const [searchValue, setSearchValue] = useState<string>('');
  //   const [allCollections, setAllCollections] = useState([]);

  const languageList = Object.values(LANGUAGES);
  const tagLanguageList = languageList.map((language) => {
    return {
      children: language,
      onClick: () => setSelectedLanguage(language),
      active: selectedLanguage === language,
    };
  });

  //All MockCollections
  const MockAllCollections = [
    { children: 'JS-Collection' },
    { children: 'Css-Collection' },
    { children: 'HTML-Collection' },
    { children: 'JS-Collection' },
    { children: 'Css-Collection' },
    { children: 'HTML-Collection' },
    { children: 'JS-Collection' },
    { children: 'Css-Collection' },
    { children: 'HTML-Collection' },
    { children: 'JS-Collection' },
    { children: 'Css-Collection' },
    { children: 'HTML-Collection' },
    { children: 'JS-Collection' },
    { children: 'Css-Collection' },
  ];
  //All MockCollections END

  return (
    <div className={styles.container}>
      <section className={styles.headerSection}>
        <Header className={styles.headerPos}>Collections</Header>
        <SearchBar
          type="search"
          handleSubmit={() => console.log('Submitted')}
          searchValue={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
        <TagGroup className={styles.tagGroupPos} tagList={tagLanguageList} />
      </section>
      <SubHeader className={styles.headerPos}>
        {selectedLanguage}
        <HeaderSpacer className={styles.headerSpacer} />
        Collections
      </SubHeader>
      <section className={styles.collectionListWrapper}>
        {MockAllCollections && (
          <TagGroup className={styles.tagList} tagList={MockAllCollections} />
        )}
        {!MockAllCollections && (
          <p className={styles.noCollections}>You don`t have any Collections</p>
        )}
      </section>

      <AddButton type="button" children="Add Collection" />
      <section>
        <Navigation activeLink="collection"></Navigation>
      </section>
    </div>
  );
}
