import React from 'react';
import type { ReactNode } from 'react';
import styles from './Tag.module.css';

type TagProps = {
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  language?: string;
};

export default function Tag({
  active,
  onClick,
  children,
  className,
  language,
}: TagProps): JSX.Element {
  return (
    <button
      id={language}
      type="button"
      onClick={onClick}
      className={`${styles.tag} ${className} ${active && styles.active}`}
    >
      {children}
    </button>
  );
}
