import React from 'react';
import type { FormEvent } from 'react';
import styles from './SearchBar.module.css';
import InputButton from '../Buttons/InputButton/InputButton';
import AddIcon from '../assets/AddIcon';
import SearchIcon from '../assets/SearchIcon';

type SearchBarProps = {
  handleSubmit: (event: FormEvent) => void;
  type: 'search' | 'add';
  className?: string;
  searchValue: string;
  setValue: (Value: string) => void;
};

function SearchBar({
  searchValue,
  type,
  handleSubmit,
  setValue,
  className,
}: SearchBarProps): JSX.Element {
  return (
    <form
      className={`${styles.container} ${className}`}
      onSubmit={handleSubmit}
    >
      <input
        type="search"
        placeholder={type === 'search' ? 'Search' : 'Enter new Collection'}
        className={styles.searchBar__input}
        value={searchValue}
        onChange={(event) => setValue(event.target.value)}
      />
      <InputButton>
        {type === 'search' ? (
          <SearchIcon />
        ) : (
          <>
            <AddIcon />
            Add
          </>
        )}
      </InputButton>
    </form>
  );
}

export default SearchBar;
