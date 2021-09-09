import React from 'react';
import AddIcon from '../../assets/AddIcon';
import SearchIcon from '../../assets/SearchIcon';
import InputButton from './SubmitButton';

export default {
  title: 'Component/Button',
  component: InputButton,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const SearchButton = (): JSX.Element => (
  <InputButton>
    <SearchIcon />
  </InputButton>
);
export const AddButton = (): JSX.Element => (
  <InputButton>
    <AddIcon />
    ADD
  </InputButton>
);
