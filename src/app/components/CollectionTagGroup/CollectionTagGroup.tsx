import React from 'react';
import styles from './CollectionTagGroup.module.css';
import TagGroup from '../TagGroup/TagGroup';
import Tag from '../Tag/Tag';
import { useState } from 'react';
import Header from '../Header/Header';
import AddButton from '../Buttons/AddButton/AddButton';

type CollectionTagGroup = {
  allCollections: { children: string; language: string }[];
  selectedCollections: { children: string; language: string }[];
};

function CollectionTags({
  allCollections,
  selectedCollections,
}: CollectionTagGroup): JSX.Element {
  // //All Collections

  // //All Collections END

  // //Selected Collections

  // //Selected Collections END

  //Modal function
  const [modalToggle, setModalToggle] = useState(false);
  function handleModal() {
    setModalToggle(!modalToggle);
  }

  //Modal function END

  return (
    <>
      {selectedCollections && (
        <TagGroup className={styles.tagSize} tagList={selectedCollections} />
      )}
      <div className={styles.collectionContainer}>
        <Tag active onClick={() => handleModal()}>
          Select Collection
        </Tag>
      </div>
      {modalToggle && (
        <section className={styles.modal} id="modal">
          <div className={styles.modalContent}>
            <Header className={styles.headerModal}>Select Collections</Header>
            {allCollections && (
              <TagGroup className={styles.tagList} tagList={allCollections} />
            )}
            {!allCollections && (
              <p className={styles.noCollections}>You have no Collections</p>
            )}
            <AddButton
              type="button"
              children="Done"
              onClick={() => handleModal()}
            />
          </div>
        </section>
      )}
    </>
  );
}

export default CollectionTags;
