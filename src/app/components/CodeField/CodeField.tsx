import type { ChangeEvent } from 'react';
import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import styles from './CodeField.module.css';
import '../../prism.css';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

export type CodeFieldProps = {
  layout?: 'detail' | 'compact';
  language: string;
};

export default function CodeField({
  layout = 'compact',
  language,
}: CodeFieldProps): JSX.Element {
  const [content, setContent] = useState('//Your Highlighted Code');

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
          <div className={styles.scrollContainer}>
            <ScrollSyncPane>
              <pre className={styles.codeBox}>
                <code className={`language-${language}`}>{content}</code>
              </pre>
            </ScrollSyncPane>
            <ScrollSyncPane>
              <textarea
                spellCheck="false"
                className={styles.textBox}
                placeholder="Write your Code here"
                onChange={handleChange}
              />
            </ScrollSyncPane>
          </div>
        </ScrollSync>
      )}
    </div>
  );
}
