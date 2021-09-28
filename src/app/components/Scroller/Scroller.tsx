import React from 'react';
import styles from './Scroller.module.css';

export default function Scroller(): JSX.Element {
  return (
    <div className={styles.scrolldowns}>
      <div className={styles.mousey}>
        <div className={styles.scroller}></div>
      </div>
    </div>
  );
}
