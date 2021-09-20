import type { ReactNode } from 'react';
import React from 'react';
import classes from './SubmitButton.module.css';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick: () => void;
};
function SubmitButton({
  children,
  className,
  onClick,
}: ButtonProps): JSX.Element {
  return (
    <button
      onClick={() => onClick()}
      className={`${classes.button} ${className}`}
    >
      {children}
    </button>
  );
}

export default SubmitButton;
