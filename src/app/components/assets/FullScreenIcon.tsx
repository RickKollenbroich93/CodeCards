import React from 'react';

const FullScreenIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
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
        d="M3.42857 15.4286H0V24H8.57143V20.5714H3.42857V15.4286ZM0 8.57143H3.42857V3.42857H8.57143V0H0V8.57143ZM20.5714 20.5714H15.4286V24H24V15.4286H20.5714V20.5714ZM15.4286 0V3.42857H20.5714V8.57143H24V0H15.4286Z"
        fill="white"
      />
    </svg>
  );
};

export default FullScreenIcon;
