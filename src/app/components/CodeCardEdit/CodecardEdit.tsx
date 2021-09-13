import type { ChangeEvent } from 'react';
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
  const [content, setContent] = useState('//Write your code here');
  const charlimit = 35; // char limit per line

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = event.target;
    const lines = value.split('\n');
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].length <= charlimit) continue;
      let j = 0;
      let space = charlimit;
      while (j++ <= charlimit) {
        if (lines[i].charAt(j) === ' ') space = j;
      }
      lines[i + 1] = lines[i].substring(space + 1) + (lines[i + 1] || '');
      lines[i] = lines[i].substring(0, space);
    }
    setContent(lines.slice(0, 10).join('\n'));
  }

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
          <pre className={styles.codeOutput}>
            <code className={`language-${language}`}>{content}</code>
          </pre>
          <textarea
            className={styles.textBox}
            value={content}
            placeholder={content}
            onChange={handleChange}
          />
        </>
      )}
    </div>
  );
}
