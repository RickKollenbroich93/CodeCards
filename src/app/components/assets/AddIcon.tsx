import React from 'react';

const AddIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11 10H1M11 20V10V20ZM11 10V0V10ZM11 10H21H11Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
      />
    </svg>
  );
};

export default AddIcon;
