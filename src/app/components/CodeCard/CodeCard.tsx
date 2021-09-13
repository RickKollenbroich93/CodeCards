import React, { useEffect } from 'react';
import Prism from 'prismjs';
import styles from './CodeCard.module.css';
import '../../prism.css';
import WindowStateButton from '../Buttons/WindowStateButton/WindowStateButton';
import FullScreenIcon from '../assets/FullScreenIcon';
import TagGroup from '../TagGroup/TagGroup';
import SubHeader from '../Header/SubHeader/SubHeader';

export type CardProps = {
  language: string;
  content: string;
  title: string;
};

export default function CodeCard({
  language,
  content,
  title,
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
        <WindowStateButton>
          <FullScreenIcon />
        </WindowStateButton>
      </div>
      <TagGroup tagList={MockList} />
    </div>
  );
}
