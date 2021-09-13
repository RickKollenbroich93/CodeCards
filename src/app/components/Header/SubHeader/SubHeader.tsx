import type { ReactNode } from 'react';
import React from 'react';
import styles from './SubHeader.module.css';

type HeaderProps = {
  children?: ReactNode;
  className?: string;
};

function Header({ children }: HeaderProps): JSX.Element {
  return <h2 className={styles.header}>{children}</h2>;
}

export default Header;
