import React from 'react';
import CssIcon from '../assets/Css';
import Tag from './Tag';

export default {
  title: 'Component/Tag',
  component: Tag,
};

export const Active = (): JSX.Element => (
  <Tag active onClick={() => alert('Test')}>
    HTML
  </Tag>
);

export const Inactive = (): JSX.Element => (
  <Tag onClick={() => alert('Test')}>
    <CssIcon />
    CSS
  </Tag>
);
