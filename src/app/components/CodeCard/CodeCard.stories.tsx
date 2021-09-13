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
  return <CodeCard language="js" content="const a = 23;" />;
};
export const CardJsFullScreen = (): JSX.Element => {
  return <CodeCard language="js" content="const a = 23;" />;
};
export const CardCSS = (): JSX.Element => {
  return <CodeCard language="css" content=".background{background:white;}" />;
};
export const CardHTML = (): JSX.Element => {
  return <CodeCard language="html" content="<h1>Hallo</h1>" />;
};
