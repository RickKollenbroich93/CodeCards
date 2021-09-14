import React from 'react';
import styles from './Tag.module.css';
import type { ReactNode } from 'react';

type TagProps = {
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
};

export default function Tag({
  active,
  onClick,
  children,
  className,
}: TagProps): JSX.Element {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${styles.tag} ${className} ${active && styles.active}`}
    >
      {children}
    </button>
  );
}
