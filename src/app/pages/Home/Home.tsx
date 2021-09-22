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
import useCodeCard from '../../hooks/useAddCard';
import type { CodeCards } from '../../types';
import AddButton from '../../components/Buttons/AddButton/AddButton';

export default function Home(): JSX.Element {
  const { codeCards, removeCodeCard } = useCodeCard();
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

  //Get all CodeCards
  const allCodeCards = codeCards.map((codeCard) => {
    return {
      title: codeCard.title,
      content: codeCard.content,
      language: codeCard.language,
      collections: codeCard.collections,
    };
  });
  const filteredCards = allCodeCards.filter(
    (cards) => cards.language === selectedLanguage
  );

  const searchedCard = filteredCards.filter(
    (card) => card.title === searchValue
  );

  const [modalToggle, setModalToggle] = useState(false);
  const [deleteCard, setDeleteCard] = useState<CodeCards>({
    title: '',
    content: '',
    language: '',
    collections: [],
  });

  function handleDeleteClick(card: CodeCards) {
    removeCodeCard(card);
    setModalToggle(false);
  }

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
          filteredCards.map((card: CodeCards) => (
            <CodeCard
              language={card.language}
              content={card.content}
              title={card.title}
              cardCollections={card.collections}
              onDeleteClick={() => {
                setModalToggle(true), setDeleteCard(card);
              }}
            />
          ))}
        {searchedCard &&
          searchedCard.map((card) => (
            <CodeCard
              language={card.language}
              content={card.content}
              title={card.title}
              cardCollections={card.collections}
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
      {modalToggle && (
        <section className={styles.modal} id="modal">
          <div className={styles.warning}>
            <p>DELETE</p>
            <p className={styles.titleColor}>" {deleteCard.title} "</p>
            <p>Are you sure</p>
            <div className={styles.buttonWrapper}>
              <AddButton onClick={() => handleDeleteClick(deleteCard)}>
                Yes
              </AddButton>
              <AddButton onClick={() => setModalToggle(false)}>No</AddButton>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
