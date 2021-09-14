import React from 'react';
import CardForm from './CardForm';

export default {
  title: 'Component/CardForm',
  component: CardForm,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const AddCard = (): JSX.Element => (
  <CardForm
    handleSubmit={() => console.log('Submitted')}
    children="Add new Card"
    onChange={(event) => console.log(event.target.value)}
  />
);
export const EditCard = (): JSX.Element => (
  <CardForm
    handleSubmit={() => console.log('Submitted')}
    children="Edit Card"
    onChange={(event) => console.log(event.target.value)}
  />
);
