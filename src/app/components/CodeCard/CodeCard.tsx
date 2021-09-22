import React, { useEffect } from 'react';
import Prism from 'prismjs';
import styles from './CodeCard.module.css';
import '../../prism.css';
import CardButtons from '../Buttons/CardButtons/CardButtons';
import DeleteIcon from '../assets/DeleteIcon';
import EditIcon from '../assets/EditIcon';
import SubHeader from '../Header/SubHeader/SubHeader';
import TagGroup from '../TagGroup/TagGroup';

export type CardProps = {
  language: string;
  content: string;
  title: string;
  description?: string;
  onDeleteClick?: () => void;
  onEditClick?: () => void;
  cardCollections: { children: string; language: string }[];
};

export default function CodeCard({
  language,
  content,
  title,
  onDeleteClick,
  onEditClick,
  cardCollections,
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
          <CardButtons onClick={onDeleteClick}>
            <DeleteIcon />
          </CardButtons>
          <CardButtons onClick={onEditClick}>
            <EditIcon />
          </CardButtons>
        </div>
      </div>
      <TagGroup tagList={cardCollections} />
    </div>
  );
}
