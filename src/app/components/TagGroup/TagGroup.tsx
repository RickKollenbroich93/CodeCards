import React from 'react';
import Tag from '../Tag/Tag';
import styles from './TagGroup.module.css';
import type { ReactNode } from 'react';

type TagProps = {
  active?: boolean;
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
};

export type TagGroupProps = {
  tagList?: TagProps[];
  className?: string;
};

const TagGroup = ({ tagList, className }: TagGroupProps): JSX.Element => {
  return (
    <section className={`${styles.container} ${className}`}>
      {tagList &&
        tagList.map((tag, index) => (
          <Tag key={index} active={tag.active} onClick={tag.onClick}>
            {tag.children}
          </Tag>
        ))}
    </section>
  );
};

export default TagGroup;
