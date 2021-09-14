import React from 'react';
import type { ReactNode } from 'react';
import AddButton from '../Buttons/AddButton/AddButton';
import styles from './CardForm.module.css';
import TagGroup from '../TagGroup/TagGroup';
import CodecardEdit from '../CodeCardEdit/CodecardEdit';
import { useState } from 'react';
import { LANGUAGES } from '../lib/languageMap';

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
  const [selectedLanguage, setSelectedLanguage] = useState<string>('html');

  const languageList = Object.values(LANGUAGES);
  const tagLanguageList = languageList.map((language) => {
    return {
      children: language,
      onClick: () => setSelectedLanguage(language),
      active: selectedLanguage === language,
    };
  });

  return (
    <form
      className={`${styles.container} ${className}`}
      onSubmit={handleSubmit}
    >
      <TagGroup tagList={tagLanguageList} />

      <input
        type="text"
        placeholder="Card Title"
        className={styles.titleInput}
        onChange={onChange}
      />
      <div className={styles.codeContainer}>
        <CodecardEdit language={selectedLanguage} />
      </div>
      <textarea
        placeholder="// Write your description here"
        className={styles.DescriptionInput}
      />
      <AddButton>{children}</AddButton>
    </form>
  );
}

export default SearchBar;
