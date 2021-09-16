import type { ReactNode } from 'react';
import React from 'react';
import classes from './SubmitButton.module.css';

type ButtonProps = {
  children: ReactNode;
  className?: string;
};
function SubmitButton({ children, className }: ButtonProps): JSX.Element {
  return (
    <button className={`${classes.button} ${className}`}>{children}</button>
  );
}

export default SubmitButton;
