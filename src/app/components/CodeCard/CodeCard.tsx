import React, { useEffect } from 'react';
import Prism from 'prismjs';
import styles from './CodeCard.module.css';
import '../../prism.css';
import WindowStateButton from '../Buttons/WindowStateButton/WindowStateButton';
import FullScreenIcon from '../assets/FullScreenIcon';
import DeleteIcon from '../assets/DeleteIcon';
import EditIcon from '../assets/EditIcon';
import TagGroup from '../TagGroup/TagGroup';
import SubHeader from '../Header/SubHeader/SubHeader';
import MinScreenIcon from '../assets/MinScreenIcon';

export type CardProps = {
  layout?: 'compact' | 'detail';
  language: string;
  content: string;
  title: string;
  description?: string;
};

export default function CodeCard({
  language,
  content,
  title,
  layout = 'compact',
}: CardProps): JSX.Element {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [language, content]);

  const MockList = [
    { children: 'React' },
    { children: 'HTML' },
    { children: 'CSS' },
  ];

  return (
    <div className={styles.codeContainer}>
      <SubHeader>{title}</SubHeader>
      <div className={styles.cardWrapper}>
        <>
          <pre className={styles.codeOutput}>
            <code className={`language-${language}`}>{content}</code>
          </pre>
        </>
        {layout === 'compact' && (
          <WindowStateButton>
            <FullScreenIcon />
          </WindowStateButton>
        )}
        {layout === 'detail' && (
          <div className={styles.buttonWrapper}>
            <WindowStateButton>
              <DeleteIcon />
            </WindowStateButton>
            <WindowStateButton>
              <EditIcon />
            </WindowStateButton>
          </div>
        )}
      </div>
      <TagGroup tagList={MockList} />
      {layout === 'detail' && (
        <>
          <WindowStateButton>
            <MinScreenIcon />
          </WindowStateButton>
        </>
      )}
    </div>
  );
}
