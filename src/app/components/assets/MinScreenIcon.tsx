import React from 'react';

const MinScreenIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M0 11H3V14H5V9H0V11ZM3 3H0V5H5V0H3V3ZM9 14H11V11H14V9H9V14ZM11 3V0H9V5H14V3H11Z"
        fill="white"
      />
    </svg>
  );
};

export default MinScreenIcon;
