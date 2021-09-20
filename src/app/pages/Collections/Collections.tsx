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
import useCollections from '../../hooks/useCollections';

export default function Collections(): JSX.Element {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('html');
  const [selectedLanguageModal, setSelectedLanguageModal] =
    useState<string>('html');
  const [searchValue, setSearchValue] = useState<string>('');
  const [addNewCollection, setAddNewCollection] = useState<string>('');

  const languageList = Object.values(LANGUAGES);
  //Select language for search Collections
  const tagLanguageList = languageList.map((language) => {
    return {
      children: language,
      onClick: () => setSelectedLanguage(language),
      active: selectedLanguage === language,
    };
  });
  //Select language in Modal
  const tagLanguageListModal = languageList.map((language) => {
    return {
      children: language,
      onClick: () => setSelectedLanguageModal(language),
      active: selectedLanguageModal === language,
    };
  });

  //All Collections
  const { collections, addCollection } = useCollections();
  const tagCollections = collections.map((Allcollections) => {
    return {
      children: Allcollections.name,
      language: Allcollections.language,
    };
  });

  //All Collections END

  //Filter Collections by Language
  const filteredCollections = tagCollections.filter(
    (collections) => collections.language === selectedLanguage
  );
  //Filter Collections by Language END

  //Searched Collection
  const searchedCollection = filteredCollections.filter(
    (collection) =>
      collection.children.toLowerCase() === searchValue.toLowerCase()
  );
  //Searched Collection END

  //Modal function
  const [modalToggle, setModalToggle] = useState(false);
  function handleModal() {
    const collection = {
      language: selectedLanguageModal,
      name: addNewCollection,
    };
    addCollection(collection);
    setModalToggle(!modalToggle);
    setAddNewCollection('');
  }
  //Modal function END

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
        {filteredCollections && searchValue === '' && (
          <TagGroup className={styles.tagList} tagList={filteredCollections} />
        )}
        {searchedCollection && (
          <TagGroup className={styles.tagList} tagList={searchedCollection} />
        )}
        {filteredCollections.length === 0 && (
          <div className={styles.noCollections}>
            <p>Sorry!!!</p>
            <p>
              You don`t have any {selectedLanguage.toUpperCase()} Collections
            </p>
          </div>
        )}
      </section>
      <AddButton
        type="button"
        children="Add Collection"
        onClick={() => setModalToggle(true)}
      />
      {modalToggle && (
        <section className={styles.modal}>
          <form className={styles.modalContent}>
            <Header className={styles.headerPos}>
              Add
              <HeaderSpacer />
              Collection
            </Header>
            <TagGroup
              className={styles.tagGroupPos}
              tagList={tagLanguageListModal}
            />
            <SearchBar
              type="add"
              handleSubmit={() => handleModal()}
              searchValue={addNewCollection}
              onChange={(event) => setAddNewCollection(event.target.value)}
            />
          </form>
        </section>
      )}
      <section>
        <Navigation activeLink="collection"></Navigation>
      </section>
    </div>
  );
}
