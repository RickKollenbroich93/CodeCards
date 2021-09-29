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
import type { Collection } from '../../types';
import SpinnerIcon from '../../components/assets/Spinner';

export default function Collections(): JSX.Element {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('html');

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

  const [deleteCollection, setDeleteCollection] = useState<Collection>({
    name: '',
    language: '',
  });
  //All Collections
  const { collections, addCollection, removeCollection } = useCollections();
  const tagCollections = collections.map((Allcollections) => {
    return {
      children: Allcollections.name,
      language: Allcollections.language,
      editable: true,
      onDeleteClick: () => {
        setShowDeleteModal(true), setDeleteCollection(Allcollections);
      },
    };
  });
  //All Collections END

  function handleDeleteClick(collection: Collection) {
    removeCollection(collection);
    setShowDeleteModal(false);
  }
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
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  function handleModal() {
    const collection = {
      language: selectedLanguage,
      name: addNewCollection,
    };
    addCollection(collection);
    setShowAddModal(!showAddModal);
    setAddNewCollection('');
  }
  //Modal function END

  return (
    <div className={styles.container}>
      <SpinnerIcon className={styles.bigSpinner} />
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
        {selectedLanguage.toUpperCase()}
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
            <p>
              You don`t have any {selectedLanguage.toUpperCase()} Collections
            </p>
          </div>
        )}
      </section>
      <AddButton
        type="button"
        children="Add Collection"
        onClick={() => setShowAddModal(true)}
      />
      {showAddModal && (
        <section className={styles.modal}>
          <form className={styles.modalContent}>
            <Header className={styles.headerPos}>
              Add
              <HeaderSpacer />
              Collection
            </Header>
            <TagGroup
              className={styles.tagGroupPos}
              tagList={tagLanguageList}
            />
            <SearchBar
              type="add"
              handleSubmit={() => handleModal()}
              searchValue={addNewCollection}
              onChange={(event) => setAddNewCollection(event.target.value)}
            />
            <AddButton
              className={styles.addButtonPos}
              type="button"
              onClick={() => setShowAddModal(false)}
            >
              Close
            </AddButton>
          </form>
        </section>
      )}
      {showDeleteModal && (
        <section className={styles.modal} id="modal">
          <div className={styles.warning}>
            <p>DELETE</p>
            <p className={styles.titleColor}>" {deleteCollection.name} "</p>
            <p>Are you sure</p>
            <div className={styles.buttonWrapperModal}>
              <AddButton onClick={() => handleDeleteClick(deleteCollection)}>
                Yes
              </AddButton>
              <AddButton onClick={() => setShowDeleteModal(false)}>
                No
              </AddButton>
            </div>
          </div>
        </section>
      )}
      <section>
        <Navigation activeLink="collection"></Navigation>
      </section>
    </div>
  );
}
