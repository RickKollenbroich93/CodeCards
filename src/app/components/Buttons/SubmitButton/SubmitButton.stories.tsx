import React from 'react';
import AddIcon from '../../assets/AddIcon';
import SearchIcon from '../../assets/SearchIcon';
import InputButton from './SubmitButton';

export default {
  title: 'Component/SubmitButton',
  component: InputButton,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const SearchButton = (): JSX.Element => (
  <InputButton onClick={() => console.log('hey')}>
    <SearchIcon />
  </InputButton>
);
export const AddButton = (): JSX.Element => (
  <InputButton onClick={() => console.log('hey')}>
    <AddIcon />
    ADD
  </InputButton>
);
