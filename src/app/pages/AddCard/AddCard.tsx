import React from 'react';
import { useState } from 'react';
import TagGroup from '../../components/TagGroup/TagGroup';
import Header from '../../components/Header/Header';
import HeaderSpacer from '../../components/HeaderSpacer/HeaderSpacer';
import Navigation from '../../components/Navigation/Navigation';
import styles from './AddCard.module.css';
import { LANGUAGES } from '../../components/lib/languageMap';
import CodeField from '../../components/CodeField/CodeField';
import CollectionTagGroup from '../../components/CollectionTagGroup/CollectionTagGroup';
import AddButton from '../../components/Buttons/AddButton/AddButton';
import useCollections from '../../hooks/useCollections';
import useCodeCard from '../../hooks/useAddCard';

export default function AddCard(): JSX.Element {
  const [selectedLanguage, setSelectedLanguage] = useState('html');
  const [newTitle, setNewTitle] = useState('');
  const [content, setContent] = useState('//Your Highlighted Code');
  const [selectedCollections, setSelectedCollections] = useState([]);

  const languageList = Object.values(LANGUAGES);
  const tagLanguageList = languageList.map((language) => {
    return {
      children: language,
      onClick: () => setSelectedLanguage(language),
      active: selectedLanguage === language,
    };
  });
  function handleChange(value: string) {
    setContent(value);
  }
  const { collections } = useCollections();
  const tagCollections = collections.map((collection) => {
    return {
      children: collection.name,
      language: collection.language,
      onClick: () => setSelectedCollections(selectedCollections),
    };
  });
  const { addCodeCard } = useCodeCard();
  function addCard() {
    const newCard = {
      title: newTitle,
      language: selectedLanguage,
      content: content,
      collections: selectedCollections,
    };
    addCodeCard(newCard);
  }

  return (
    <div className={styles.container}>
      <section className={styles.headerSection}>
        <Header>
          Add
          <HeaderSpacer />
          NewCard
        </Header>
      </section>
      <form className={styles.formWrapper}>
        <TagGroup tagList={tagLanguageList} className={styles.taggroup} />
        <input
          type="text"
          placeholder="Card Title"
          value={newTitle}
          className={styles.titleInput}
          onChange={(event) => setNewTitle(event.target.value)}
        />
        <CodeField
          language={selectedLanguage}
          content={content}
          onChange={handleChange}
        />
        <CollectionTagGroup
          allCollections={tagCollections}
          selectedCollections={selectedCollections}
        />
        <AddButton type="submit" children="Add new Card" onClick={addCard} />
      </form>
      <section className={styles.navSection}>
        <Navigation activeLink="add" />
      </section>
    </div>
  );
}
