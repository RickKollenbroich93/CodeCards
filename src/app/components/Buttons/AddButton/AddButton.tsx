import type { ReactNode } from 'react';
import React from 'react';
import classes from './AddButton.module.css';

type ButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
};
function AddButton({
  children,
  className,
  onClick,
  type,
}: ButtonProps): JSX.Element {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${classes.button} ${className}`}
    >
      {children}
    </button>
  );
}

export default AddButton;
