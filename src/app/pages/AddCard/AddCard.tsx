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
import type { Collection } from '../../types';
import { useHistory } from 'react-router';

export default function AddCard(): JSX.Element {
  const { addCodeCard } = useCodeCard();
  const history = useHistory();

  const [selectedLanguage, setSelectedLanguage] = useState('html');
  const [newTitle, setNewTitle] = useState('');
  const [content, setContent] = useState('//Your Highlighted Code');
  const [selectedCollections, setSelectedCollections] = useState<
    { children: string; language: string }[]
  >([]);

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
      onClick: () => addToCard(collection),
      //Here is Error
      active: selectedCollections.find(
        (element) =>
          element ===
          {
            children: collection.name,
            language: collection.language,
          }
      ),
    };
  });
  function addToCard(collection: Collection) {
    const addedCollection = {
      children: collection.name,
      language: collection.language,
      onClick: collection.onClick,
    };

    const allSelectedCollections = [...selectedCollections, addedCollection];
    setSelectedCollections(allSelectedCollections);
  }

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
      <form
        className={styles.formWrapper}
        onSubmit={(event) => {
          event.preventDefault();
          addCard();
          history.push('/');
        }}
      >
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
        <AddButton type="submit" children="Add new Card" />
      </form>
      <section className={styles.navSection}>
        <Navigation activeLink="add" />
      </section>
    </div>
  );
}
