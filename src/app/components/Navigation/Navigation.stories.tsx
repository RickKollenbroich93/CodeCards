import React from 'react';
import Navigation from './Navigation';

export default {
  title: 'Component/Navigation',
  component: Navigation,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
export const Home = (): JSX.Element => <Navigation activeLink="home" />;
export const Collection = (): JSX.Element => (
  <Navigation activeLink="collection" />
);
export const AddCard = (): JSX.Element => <Navigation activeLink="add" />;
