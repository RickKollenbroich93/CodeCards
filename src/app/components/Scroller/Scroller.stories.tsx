import React from 'react';
import Scroller from './Scroller';

export default {
  title: 'Component/Scroller',
  component: Scroller,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const scroller = (): JSX.Element => <Scroller />;
