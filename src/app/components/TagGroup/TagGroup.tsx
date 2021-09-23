import React from 'react';
import type { ReactNode } from 'react';
import Tag from '../Tag/Tag';
import styles from './TagGroup.module.css';

type TagProps = {
  editable?: boolean;
  active?: boolean;
  onClick?: () => void;
  onDeleteClick?: () => void;
  children: ReactNode;
  className?: string;
  language?: string;
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
          <Tag
            key={index}
            active={tag.active}
            onClick={tag.onClick}
            editable={tag.editable}
            onDeleteClick={tag.onDeleteClick}
          >
            {tag.children}
          </Tag>
        ))}
    </section>
  );
};

export default TagGroup;
