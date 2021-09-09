import React from 'react';
import MinScreenIcon from '../../assets/MinScreenIcon';
import MinButton from './MinButton';

export default {
  title: 'Component/Button',
  component: MinButton,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const MinWindow = (): JSX.Element => (
  <MinButton>
    <MinScreenIcon />
  </MinButton>
);
