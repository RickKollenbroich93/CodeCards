import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import styles from './CodeCardEdit.module.css';
import '../../prism.css';

export type CardProps = {
  layout?: 'detail' | 'compact';
  language: string;
};

export default function CodeCard({
  layout = 'compact',
  language,
}: CardProps): JSX.Element {
  const [content, setContent] = useState('Your Code');
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
          <textarea
            className={styles.textBox}
            placeholder={content}
            onChange={(event) => setContent(event.target.value)}
          />
        </>
      )}
    </div>
  );
}
