import React, { useEffect } from 'react';
import Prism from 'prismjs';
import styles from './CodeCard.module.css';
import '../../prism.css';

export type CardProps = {
  layout?: 'detail' | 'compact';
  language: string;
  content: string;
};

export default function CodeCard({
  layout = 'compact',
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
      {layout === 'compact' && (
        <>
          {' '}
          <pre className={styles.codeOutput}>
            <code className={`language-${language}`}>{content.trim()}</code>
          </pre>
        </>
      )}
    </div>
  );
}
