import type { ReactNode } from 'react';
import React from 'react';
import styles from './DescriptionBox.module.css';

type ButtonProps = {
  children: ReactNode;
};
function InputButton({ children }: ButtonProps): JSX.Element {
  return <p className={styles.textBox}>{children}</p>;
}

export default InputButton;
