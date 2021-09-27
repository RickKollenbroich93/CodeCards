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
import CodeField from '../../components/CodeField/CodeField';
import SpinnerIcon from '../../components/assets/Spinner';

export default function Home(): JSX.Element {
  //Modal Toggle useStates
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCollectionModal, setShowCollectioModal] = useState(false);
  // Modal Toggle useStates END

  //EditCard useStates
  const [newTitle, setNewTitle] = useState('');
  const [content, setContent] = useState('//Your Highlighted Code');
  //EditCard useStates END
  const { codeCards, removeCodeCard, editCodeCard } = useCodeCard();
  const [selectedLanguage, setSelectedLanguage] = useState<string>('html');
  const [searchValue, setSearchValue] = useState<string>('');
  const [deleteCard, setDeleteCard] = useState<CodeCards>({
    title: '',
    content: '',
    language: '',
    collections: [],
  });

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
    (card) => card.title.toLowerCase() === searchValue.toLowerCase()
  );

  function handleDeleteClick(card: CodeCards) {
    removeCodeCard(card);
    setShowDeleteModal(false);
  }
  function handleChange(value: string) {
    setContent(value);
  }
  // EDIT CARD ----------------------------------------------------------<Start>
  function handleEditClick() {
    const editCard = {
      title: newTitle,
      content: content,
      language: deleteCard.language,
      collections: deleteCard.collections,
    };
    console.log(editCard);
    console.log(deleteCard);
    editCodeCard(deleteCard, editCard);

    setShowEditModal(false);
  }
  // EDIT CARD ----------------------------------------------------------<END>
  const [showCollection, setShowCollection] = useState<string>('');
  const [collectionTitle, setCollectionTitle] = useState<string>('');
  function buildCollection(
    cardCollection: { children: string; language: string }[]
  ) {
    const useCollections = cardCollection.map((collection) => {
      return {
        children: collection.children,
        language: collection.language,
        onClick: () => {
          setShowCollection(collection.children),
            setShowCollectioModal(true),
            setCollectionTitle(collection.children);
        },
      };
    });
    return useCollections;
  }
  console.log(showCollection);
  const collectionFilteredCards = allCodeCards.filter((card) =>
    card.collections.some(
      (filteredCard) =>
        filteredCard.children.toLowerCase() === showCollection.toLowerCase()
    )
  );

  return (
    <div className={styles.container}>
      <SpinnerIcon className={styles.bigSpinner} />
      <SpinnerIcon className={styles.middleSpinner} />
      <SpinnerIcon className={styles.smallSpinner} />
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
              editable="Edit"
              cardCollections={buildCollection(card.collections)}
              onEditClick={() => {
                setShowEditModal(true),
                  setContent(card.content),
                  setNewTitle(card.title),
                  setDeleteCard(card);
              }}
              onDeleteClick={() => {
                setShowDeleteModal(true), setDeleteCard(card);
              }}
            />
          ))}
        {searchedCard &&
          searchedCard.map((card) => (
            <CodeCard
              language={card.language}
              content={card.content}
              title={card.title}
              editable="Edit"
              cardCollections={buildCollection(card.collections)}
              onEditClick={() => {
                setShowEditModal(true),
                  setContent(card.content),
                  setNewTitle(card.title),
                  setDeleteCard(card);
              }}
              onDeleteClick={() => {
                setShowDeleteModal(true), setDeleteCard(card);
              }}
            />
          ))}
        {filteredCards.length === 0 && (
          <section className={styles.warning}>
            <p>You don`t have any {selectedLanguage.toUpperCase()} Cards.</p>
          </section>
        )}
      </section>
      <section className={styles.navSection}>
        <Navigation activeLink="home"></Navigation>
      </section>
      {showDeleteModal && (
        <section className={styles.modal} id="modal">
          <div className={styles.warning}>
            <p>DELETE</p>
            <p className={styles.titleColor}>" {deleteCard.title} "</p>
            <p>Are you sure</p>
            <div className={styles.buttonWrapper}>
              <AddButton onClick={() => handleDeleteClick(deleteCard)}>
                Yes
              </AddButton>
              <AddButton onClick={() => setShowDeleteModal(false)}>
                No
              </AddButton>
            </div>
          </div>
        </section>
      )}
      {showEditModal && (
        <section className={styles.modalEdit} id="modal">
          <div className={styles.editModalWrapper}>
            <div className={styles.headerWrapper}>
              <Header className={styles.modalHeaderPos}>
                Edit
                <HeaderSpacer />
                Card
              </Header>

              <input
                type="text"
                placeholder="Card Title"
                value={newTitle}
                className={styles.titleInput}
                onChange={(event) => setNewTitle(event.target.value)}
              />
            </div>
            <CodeField
              language={deleteCard.language}
              content={content}
              onChange={handleChange}
            />

            <div className={styles.editButtonWrapper}>
              <AddButton onClick={() => handleEditClick()}>Confirm</AddButton>
              <AddButton onClick={() => setShowEditModal(false)}>
                Abort
              </AddButton>
            </div>
          </div>
        </section>
      )}
      {showCollectionModal && (
        <section className={styles.cardsModal} id="modal">
          <Header className={styles.modalHeaderPos}>
            Cards in
            <HeaderSpacer /> {collectionTitle}
          </Header>
          <section className={styles.modalCard}>
            {collectionFilteredCards.map((card) => (
              <CodeCard
                language={card.language}
                content={card.content}
                title={card.title}
                cardCollections={card.collections}
              />
            ))}
          </section>
          <AddButton onClick={() => setShowCollectioModal(false)}>
            Abort
          </AddButton>
        </section>
      )}
    </div>
  );
}
