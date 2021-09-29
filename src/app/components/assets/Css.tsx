import React from 'react';

const CssIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.50195 0H10.08V1.078H8.57995V2.156H10.08V3.234H7.50195V0Z"
        fill="black"
      />
      <path
        d="M10.595 0H13.174V0.938H11.674V1.125H13.174V3.281H10.595V2.297H12.095V2.109H10.595V0Z"
        fill="black"
      />
      <path
        d="M13.6899 0H16.2669V0.938H14.7669V1.125H16.2669V3.281H13.6899V2.297H15.1899V2.109H13.6899V0Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.991 24L5.047 22.072L3 4.71704H21L18.954 22.07L11.991 24ZM7.047 12.573L7.238 14.701H14.615L14.368 17.461L11.994 18.103H11.992L9.622 17.463L9.47 15.766H7.333L7.631 19.108L11.991 20.318L16.358 19.108L16.89 13.144L16.942 12.573L17.326 8.26404H6.664L6.858 10.393H14.994L14.8 12.573H7.047V12.573Z"
        fill="black"
      />
    </svg>
  );
};

export default CssIcon;
