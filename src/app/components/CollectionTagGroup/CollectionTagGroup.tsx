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
  const modal = document.querySelector('#modal');
  modalToggle === false && modal?.classList.add(`${styles.modalHidden}`);
  modalToggle === true && modal?.classList.remove(`${styles.modalHidden}`);
  //Modal function END

  //Mock SHIT
  // const testList = [
  //   { children: 'Hallo' },
  //   { children: 'I hate this component' },
  // ];

  return (
    <>
      <div className={styles.collectionContainer}>
        {selectedCollections && <TagGroup tagList={selectedCollectionList} />}
        <Tag active onClick={() => handleModal()}>
          Select Collection
        </Tag>
      </div>

      <section className={styles.modal} id="modal">
        TEXT
        <div className={styles.modalContent}>
          <Header className={styles.headerModal}>Select Collections</Header>
          {allCollections && (
            <TagGroup className={styles.tagList} tagList={allCollectionList} />
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
    </>
  );
}

export default CollectionTags;
