import React from 'react';
import SearchBar from './SearchBar';

export default {
  title: 'Component/SearchBar',
  component: SearchBar,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Search = (): JSX.Element => (
  <SearchBar
    type="search"
    handleSubmit={() => console.log('Submitted')}
    searchValue=""
    setValue={(Value) => console.log(Value)}
  />
);
export const EnterNewCollection = (): JSX.Element => (
  <SearchBar
    type="add"
    handleSubmit={() => console.log('Submitted')}
    searchValue=""
    setValue={(Value) => console.log(Value)}
  />
);
