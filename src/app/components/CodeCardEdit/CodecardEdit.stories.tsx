import React from 'react';
import CodeCardEdit from './CodecardEdit';

export default {
  title: 'Component/CodeCardEdit',
  component: CodeCardEdit,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
export const CardHtml = (): JSX.Element => {
  return <CodeCardEdit language="html" />;
};
export const CardCss = (): JSX.Element => {
  return <CodeCardEdit language="css" />;
};
export const CardJs = (): JSX.Element => {
  return <CodeCardEdit language="js" />;
};
