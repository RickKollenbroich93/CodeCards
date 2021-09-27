import React from 'react';
import type { ReactNode } from 'react';
import styles from './Tag.module.css';
import CardButton from '../Buttons/CardButtons/CardButtons';
import DeleteIcon from '../assets/DeleteIcon';

type TagProps = {
  editable?: boolean;
  active?: boolean;
  onClick?: () => void;
  onDeleteClick?: () => void;
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
  editable,
  onDeleteClick,
}: TagProps): JSX.Element {
  return (
    <div className={styles.tagContainer}>
      <button
        id={language}
        type="button"
        onClick={onClick}
        className={`${styles.tag} ${className} ${active && styles.active}`}
      >
        {children}
      </button>
      {editable && (
        <CardButton onClick={onDeleteClick} className={styles.deleteButton}>
          <DeleteIcon />
        </CardButton>
      )}
    </div>
  );
}
