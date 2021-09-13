import React from 'react';
import DescriptionBox from './DescriptionBox';

export default {
  title: 'Component/Description',
  component: DescriptionBox,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const DescriptionCard = (): JSX.Element => {
  return <DescriptionBox>bla bla bla bla bla</DescriptionBox>;
};
