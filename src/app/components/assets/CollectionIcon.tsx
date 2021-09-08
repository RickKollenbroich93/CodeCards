import React from 'react';

const CollectionIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.44444 5.44444H16.5556M18.7778 9.88889H3.22222H18.7778ZM18.7778 9.88889C19.3671 9.88889 19.9324 10.123 20.3491 10.5398C20.7659 10.9565 21 11.5217 21 12.1111V18.7778C21 19.3671 20.7659 19.9324 20.3491 20.3491C19.9324 20.7659 19.3671 21 18.7778 21H3.22222C2.63285 21 2.06762 20.7659 1.65087 20.3491C1.23413 19.9324 1 19.3671 1 18.7778V12.1111C1 11.5217 1.23413 10.9565 1.65087 10.5398C2.06762 10.123 2.63285 9.88889 3.22222 9.88889H18.7778ZM18.7778 9.88889V7.66667C18.7778 7.0773 18.5437 6.51207 18.1269 6.09532C17.7102 5.67857 17.1449 5.44444 16.5556 5.44444L18.7778 9.88889ZM3.22222 9.88889V7.66667C3.22222 7.0773 3.45635 6.51207 3.8731 6.09532C4.28984 5.67857 4.85507 5.44444 5.44444 5.44444L3.22222 9.88889ZM5.44444 5.44444V3.22222C5.44444 2.63285 5.67857 2.06762 6.09532 1.65087C6.51207 1.23413 7.0773 1 7.66667 1H14.3333C14.9227 1 15.4879 1.23413 15.9047 1.65087C16.3214 2.06762 16.5556 2.63285 16.5556 3.22222V5.44444H5.44444Z"
        stroke="white"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CollectionIcon;
