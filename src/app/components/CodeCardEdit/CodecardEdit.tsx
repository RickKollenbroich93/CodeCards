import type { ChangeEvent } from 'react';
import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import styles from './CodeCardEdit.module.css';
import '../../prism.css';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

export type CardProps = {
  layout?: 'detail' | 'compact';
  language: string;
};

export default function CodeCard({
  layout = 'compact',
  language,
}: CardProps): JSX.Element {
  const [content, setContent] = useState('//Write your code here');

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    const { value } = event.target;
    setContent(value);
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
        <ScrollSync>
          <div>
            <ScrollSyncPane>
              <pre className={styles.codeBox}>
                <code className={`language-${language}`}>{content}</code>
              </pre>
            </ScrollSyncPane>
            <ScrollSyncPane>
              <textarea
                spellCheck="false"
                className={styles.textBox}
                placeholder={content}
                onChange={handleChange}
              />
            </ScrollSyncPane>
          </div>
        </ScrollSync>
      )}
    </div>
  );
}
