import React from 'react';
import HeaderSpacer from '../HeaderSpacer/HeaderSpacer';
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

export const mainHeader = (): JSX.Element => (
  <Header>
    code
    <HeaderSpacer />
    Cards
  </Header>
);
export const AddCollection = (): JSX.Element => (
  <Header>
    Add
    <HeaderSpacer />
    Collections
  </Header>
);
export const Collection = (): JSX.Element => <Header>Collections</Header>;
export const NewCollection = (): JSX.Element => (
  <Header>
    New
    <HeaderSpacer />
    Collection
  </Header>
);
