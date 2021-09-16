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
  return <CodeField language="html" />;
};
export const CardCss = (): JSX.Element => {
  return <CodeField language="css" />;
};
export const CardJs = (): JSX.Element => {
  return <CodeField language="js" />;
};
