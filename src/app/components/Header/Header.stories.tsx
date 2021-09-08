import React from 'react';
import Header from './Header';

export default {
  title: 'Component/Header',
  component: Header,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const codeCards = (): JSX.Element => <Header>code#Cards</Header>;
export const AddCollection = (): JSX.Element => (
  <Header>Add#Collections</Header>
);
export const Collection = (): JSX.Element => <Header>Collections</Header>;
export const NewCollection = (): JSX.Element => <Header>New#Collection</Header>;
