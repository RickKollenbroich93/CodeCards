import React, { useEffect } from 'react';
import Prism from 'prismjs';
import styles from './CodeField.module.css';
import '../../prism.css';
import { ScrollSync, ScrollSyncPane } from 'react-scroll-sync';

export type CodeFieldProps = {
  layout?: 'detail' | 'compact';
  language: string;
  content: string;
  onChange: (value: string) => void;
};

export default function CodeField({
  layout = 'compact',
  language,
  content,
  onChange,
}: CodeFieldProps): JSX.Element {
  // const [content, setContent] = useState('//Your Highlighted Code');

  // function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
  // //    const { value } = event.target;
  // //    setContent(value);
  // //  }

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
                onChange={(event) => onChange(event.target.value)}
              />
            </ScrollSyncPane>
          </div>
        </ScrollSync>
      )}
    </div>
  );
}
