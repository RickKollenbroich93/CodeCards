import React from 'react';
import CollectionTagGroup from './CollectionTagGroup';

export default {
  title: 'Component/CollectionTagGroup',
  component: CollectionTagGroup,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const AddCard = (): JSX.Element => <CollectionTagGroup />;
export const EditCard = (): JSX.Element => <CollectionTagGroup />;
