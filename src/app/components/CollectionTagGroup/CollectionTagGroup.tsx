import React from 'react';
import styles from './CollectionTagGroup.module.css';
import TagGroup from '../TagGroup/TagGroup';
import Tag from '../Tag/Tag';
import { useState } from 'react';
import Header from '../Header/Header';
import AddButton from '../Buttons/AddButton/AddButton';

type CollectionTagGroup = {
  children: string;
};

function CollectionTags(): JSX.Element {
  //All Collections
  const allCollections: CollectionTagGroup[] = [];
  const allCollectionList = allCollections.map((collection) => {
    return { children: collection };
  });
  //All Collections END

  //Selected Collections
  const selectedCollections: CollectionTagGroup[] = [];
  const selectedCollectionList = selectedCollections.map((collection) => {
    return { children: collection };
  });
  //Selected Collections END

  //Modal function
  const [modalToggle, setModalToggle] = useState(false);
  function handleModal() {
    setModalToggle(!modalToggle);
  }

  //Modal function END

  return (
    <>
      <div className={styles.collectionContainer}>
        {selectedCollections && <TagGroup tagList={selectedCollectionList} />}
        <Tag active onClick={() => handleModal()}>
          Select Collection
        </Tag>
      </div>
      {modalToggle && (
        <section className={styles.modal} id="modal">
          <div className={styles.modalContent}>
            <Header className={styles.headerModal}>Select Collections</Header>
            {allCollections && (
              <TagGroup
                className={styles.tagList}
                tagList={allCollectionList}
              />
            )}
            {allCollectionList && (
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
