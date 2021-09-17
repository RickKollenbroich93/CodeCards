import React from 'react';
import MinScreenIcon from '../../assets/MinScreenIcon';
import FullScreenIcon from '../../assets/FullScreenIcon';
import CardButtons from './CardButtons';

export default {
  title: 'Component/CardButtons',
  component: CardButtons,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const MinWindow = (): JSX.Element => (
  <CardButtons>
    <MinScreenIcon />
  </CardButtons>
);
export const FullWindow = (): JSX.Element => (
  <CardButtons>
    <FullScreenIcon />
  </CardButtons>
);
