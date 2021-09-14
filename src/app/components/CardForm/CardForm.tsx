import React from 'react';
import type { ReactNode } from 'react';
import AddButton from '../Buttons/AddButton/AddButton';
import styles from './CardForm.module.css';
import TagGroup from '../TagGroup/TagGroup';
import CodecardEdit from '../CodeCardEdit/CodecardEdit';
import { useState } from 'react';

type SearchBarProps = {
  handleSubmit: (event: React.FormEvent) => void;
  className?: string;

  children: ReactNode;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchBar({
  handleSubmit,
  onChange,
  className,
  children,
}: SearchBarProps): JSX.Element {
  const [language, setLanguage] = useState<string | null>('HTML');

  const LanguageList = [
    { children: 'HTML' },
    { children: 'CSS' },
    { children: 'React' },
  ];
  return (
    <form
      className={`${styles.container} ${className}`}
      onSubmit={handleSubmit}
    >
      <TagGroup tagList={LanguageList} />

      <input
        type="text"
        placeholder="Card Title"
        className={styles.searchBar__input}
        onChange={onChange}
      />
      <CodecardEdit language="css" />
      <input
        type="text"
        placeholder="// Write your description here"
        className={styles.searchBar__input}
        onChange={onChange}
      />
      <AddButton>{children}</AddButton>
    </form>
  );
}

export default SearchBar;
