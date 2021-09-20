import React from 'react';
import styles from './SearchBar.module.css';
import SubmitButton from '../Buttons/SubmitButton/SubmitButton';
import AddIcon from '../assets/AddIcon';
import SearchIcon from '../assets/SearchIcon';

type SearchBarProps = {
  handleSubmit: () => void;
  type: 'search' | 'add';
  className?: string;
  searchValue: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function SearchBar({
  searchValue,
  type,
  handleSubmit,
  onChange,
  className,
}: SearchBarProps): JSX.Element {
  return (
    <section className={`${styles.container} ${className}`}>
      <input
        type="search"
        placeholder={type === 'search' ? 'Search' : 'Enter new Collection'}
        className={styles.searchBar__input}
        value={searchValue}
        onChange={onChange}
      />
      <SubmitButton onClick={handleSubmit}>
        {type === 'search' ? (
          <SearchIcon />
        ) : (
          <>
            <AddIcon />
            Add
          </>
        )}
      </SubmitButton>
    </section>
  );
}

export default SearchBar;
