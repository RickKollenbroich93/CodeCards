import React from 'react';
import MinScreenIcon from '../../assets/MinScreenIcon';
import FullScreenIcon from '../../assets/FullScreenIcon';
import WindowStateButton from './WindowStateButton';

export default {
  title: 'Component/Button',
  component: WindowStateButton,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const MinWindow = (): JSX.Element => (
  <WindowStateButton>
    <MinScreenIcon />
  </WindowStateButton>
);
export const FullWindow = (): JSX.Element => (
  <WindowStateButton>
    <FullScreenIcon />
  </WindowStateButton>
);
