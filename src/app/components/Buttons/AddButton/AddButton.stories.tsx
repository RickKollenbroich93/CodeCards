import React from 'react';
import AddIcon from '../../assets/AddIcon';
import AddButton from './AddButton';

export default {
  title: 'Component/Button',
  component: AddButton,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const AddCollection = (): JSX.Element => (
  <AddButton>
    <AddIcon />
    New Collection
  </AddButton>
);
export const AddCardButton = (): JSX.Element => (
  <AddButton>
    <AddIcon />
    ADD new Card
  </AddButton>
);
