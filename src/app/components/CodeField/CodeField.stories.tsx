import React from 'react';
import CodeField from './CodeField';

export default {
  title: 'Component/CodeField',
  component: CodeField,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
export const CardHtml = (): JSX.Element => {
  return (
    <CodeField language="html" onChange={() => console.log('Hey')} content="" />
  );
};
export const CardCss = (): JSX.Element => {
  return (
    <CodeField language="css" onChange={() => console.log('Hey')} content="" />
  );
};
export const CardJs = (): JSX.Element => {
  return (
    <CodeField language="js" onChange={() => console.log('Hey')} content="" />
  );
};
