import React from 'react';
import SubHeader from './SubHeader';

export default {
  title: 'Component/SubHeader',
  component: SubHeader,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const subHeader = (): JSX.Element => <SubHeader>CARDNAME</SubHeader>;
