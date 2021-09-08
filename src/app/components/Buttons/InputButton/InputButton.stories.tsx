import React from 'react';
import AddIcon from '../../assets/AddIcon';
import SearchIcon from '../../assets/SearchIcon';
import InputButton from './InputButton';

export default {
  title: 'Component/Button',
  component: InputButton,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Login = (): JSX.Element => (
  <InputButton>
    <SearchIcon />
  </InputButton>
);
export const Register = (): JSX.Element => (
  <InputButton>
    <AddIcon />
    ADD
  </InputButton>
);
