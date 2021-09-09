import React from 'react';
import AddIcon from '../../assets/AddIcon';
import InputButton from './AddButton';

export default {
  title: 'Component/Button',
  component: InputButton,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const AddCollection = (): JSX.Element => (
  <InputButton>
    <AddIcon />
    New Collection
  </InputButton>
);
export const AddCardButton = (): JSX.Element => (
  <InputButton>
    <AddIcon />
    ADD new Card
  </InputButton>
);
