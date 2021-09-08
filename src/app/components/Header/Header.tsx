import type { ReactNode } from 'react';
import React from 'react';
import styles from './Header.module.css';

type HeaderProps = {
  children?: ReactNode;
  className?: string;
};

function Header({ children, className }: HeaderProps): JSX.Element {
  return (
    <header
      className={`${styles.headerContainer} ${className}
      }`}
    >
      <span className={styles.headerBracket}> &lt; </span>
      <h1 className={styles.header}>{children}</h1>
      <span className={styles.headerBracket}> &gt; </span>
    </header>
  );
}

export default Header;
