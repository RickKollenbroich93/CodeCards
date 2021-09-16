import React, { useEffect } from 'react';
import Prism from 'prismjs';
import styles from './CodeCard.module.css';
import '../../prism.css';
import WindowStateButton from '../Buttons/CardButtons/CardButtons';
import DeleteIcon from '../assets/DeleteIcon';
import EditIcon from '../assets/EditIcon';
import SubHeader from '../Header/SubHeader/SubHeader';
import CollectionTagGroup from '../CollectionTagGroup/CollectionTagGroup';

export type CardProps = {
  language: string;
  content: string;
  title: string;
  description?: string;
  onClick?: () => void;
};

export default function CodeCard({
  language,
  content,
  title,
  onClick,
}: CardProps): JSX.Element {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [language, content]);

  return (
    <div className={styles.codeContainer}>
      <SubHeader>{title}</SubHeader>
      <div className={styles.cardWrapper}>
        <pre className={styles.codeOutput}>
          <code className={`language-${language}`}>{content}</code>
        </pre>
        <div className={styles.buttonWrapper}>
          <WindowStateButton onClick={onClick}>
            <DeleteIcon />
          </WindowStateButton>
          <WindowStateButton onClick={onClick}>
            <EditIcon />
          </WindowStateButton>
        </div>
      </div>
      <CollectionTagGroup />
    </div>
  );
}
