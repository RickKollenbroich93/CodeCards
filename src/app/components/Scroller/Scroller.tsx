import React from 'react';
import styles from './Scroller.module.css';

type Scroller = {
  className?: string;
};

export default function Scroller({ className }: Scroller): JSX.Element {
  return (
    <div
      className={`${styles.headerContainer} ${className}
  }`}
    >
      <div className={styles.scrolldowns}>
        <div className={styles.mousey}>
          <div className={styles.scroller}></div>
        </div>
      </div>
    </div>
  );
}
