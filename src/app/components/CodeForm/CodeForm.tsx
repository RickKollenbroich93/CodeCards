import React from 'react';
import type { ReactNode } from 'react';
import AddButton from '../Buttons/AddButton/AddButton';
import styles from './CodeForm.module.css';
import TagGroup from '../TagGroup/TagGroup';
import CodeField from '../CodeField/CodeField';
import { useState } from 'react';
import { LANGUAGES } from '../lib/languageMap';
import CollectionTagGroup from '../CollectionTagGroup/CollectionTagGroup';

type CodeFormProps = {
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
}: CodeFormProps): JSX.Element {
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
      <TagGroup tagList={tagLanguageList} className={styles.taggroup} />

      <input
        type="text"
        placeholder="Card Title"
        className={styles.titleInput}
        onChange={onChange}
      />
      <CodeField language={selectedLanguage}></CodeField>
      <CollectionTagGroup />
      <AddButton>{children}</AddButton>
    </form>
  );
}

export default SearchBar;
