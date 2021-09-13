import React, { useEffect } from 'react';
import Prism from 'prismjs';
import styles from './CodeCard.module.css';
import '../../prism.css';
import WindowStateButton from '../Buttons/WindowStateButton/WindowStateButton';
import FullScreenIcon from '../assets/FullScreenIcon';
import TagGroup from '../TagGroup/TagGroup';

export type CardProps = {
  language: string;
  content: string;
};

export default function CodeCard({
  language,
  content,
}: CardProps): JSX.Element {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [language, content]);

  return (
    <div className={styles.codeContainer}>
      <>
        <pre className={styles.codeOutput}>
          <code className={`language-${language}`}>{content}</code>
        </pre>
      </>
      <TagGroup />
      <WindowStateButton>
        <FullScreenIcon />
      </WindowStateButton>
    </div>
  );
}
