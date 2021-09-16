import React from 'react';
import CodeForm from './CodeForm';

export default {
  title: 'Component/CodeForm',
  component: CodeForm,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
};

export const AddCard = (): JSX.Element => (
  <CodeForm
    handleSubmit={() => console.log('Submitted')}
    children="Add new Card"
    onChange={(event) => console.log(event.target.value)}
  />
);
export const EditCard = (): JSX.Element => (
  <CodeForm
    handleSubmit={() => console.log('Submitted')}
    children="Edit Card"
    onChange={(event) => console.log(event.target.value)}
  />
);
