import React from 'react';
import TagGroup from './TagGroup';
import type { Story } from '@storybook/react';
import type { TagGroupProps } from './TagGroup';

export default {
  title: 'Component/TagGroup',
  component: TagGroup,
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

const tags = [
  {
    active: true,
    children: 'All',
    editable: true,
  },
  {
    active: false,
    children: 'HTML',
  },
  {
    active: false,
    children: 'CSS',
  },
  {
    active: false,
    children: 'JavaScript',
  },
  {
    active: false,
    children: 'REACT',
  },
];

const Template: Story<TagGroupProps> = (args) => <TagGroup {...args} />;

export const NoTags = (): JSX.Element => <TagGroup></TagGroup>;

export const Primary = Template.bind({});
Primary.args = {
  tagList: tags,
};
