import React from 'react';
import CodeCard from './CodeCard';

export default {
  title: 'Component/CodeCard',
  component: CodeCard,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const CardJs = (): JSX.Element => {
  return <CodeCard language="js" content="const a = 23;" title="JS-Card" />;
};
