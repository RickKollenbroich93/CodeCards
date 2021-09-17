import React from 'react';
import styles from './HeaderSpacer.module.css';

type HeaderSpacerProps = {
  className?: string;
};

function HeaderSpacer({ className }: HeaderSpacerProps): JSX.Element {
  return (
    <span
      className={`${styles.headerSpacer} ${className}
}`}
    >
      #
    </span>
  );
}

export default HeaderSpacer;
