import useLocalStorage from './useLocalStorage';
import type { Collection } from '../types';

export default function useCollections(): {
  collections: Collection[];
  addCollection: (collection: Collection) => void;
  removeCollection: (newCollection: Collection) => void;
} {
  const [collections, setCollections] = useLocalStorage<Collection[]>(
    'collections',
    []
  );

  function addCollection(collection: Collection) {
    setCollections([...collections, collection]);
  }

  function removeCollection(newCollection: Collection) {
    setCollections(
      collections.filter((collection) => collection !== newCollection)
    );
  }

  return { collections, addCollection, removeCollection };
}
