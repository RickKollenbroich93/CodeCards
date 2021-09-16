import React from 'react';
// import type { ReactNode } from 'react';

import styles from './CollectionTagGroup.module.css';
import TagGroup from '../TagGroup/TagGroup';

import Tag from '../Tag/Tag';

type CollectionTagGroup = {
  children: string;
};

function SearchBar(): JSX.Element {
  const selectedCollections: CollectionTagGroup[] = [];
  const selectedCollectionList = selectedCollections.map((collection) => {
    return { children: collection };
  });

  return (
    <div className={styles.collectionContainer}>
      {selectedCollections && <TagGroup tagList={selectedCollectionList} />}
      <Tag active>Select Collection</Tag>
    </div>
  );
}

export default SearchBar;
