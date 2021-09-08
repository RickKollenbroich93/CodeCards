import React from 'react';

const SearchIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="22"
      height="20"
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.0949 14.977C18.5695 14.5284 18.0582 14.0669 17.5615 13.593C17.1442 13.215 16.893 12.94 16.893 12.94L13.7522 11.603C15.0096 10.3316 15.7036 8.69499 15.7039 7C15.7039 3.141 12.1818 0 7.85197 0C3.52217 0 0 3.141 0 7C0 10.859 3.52217 14 7.85197 14C9.82955 14 11.6321 13.34 13.0152 12.261L14.5149 15.061C14.5149 15.061 14.8234 15.285 15.2474 15.657C15.6815 16.02 16.2525 16.511 16.7999 17.024L18.3231 18.416L19.0007 19.062L21.3798 16.941L20.6552 16.337C20.23 15.965 19.6625 15.471 19.0949 14.977ZM7.85197 12C4.75942 12 2.24342 9.757 2.24342 7C2.24342 4.243 4.75942 2 7.85197 2C10.9445 2 13.4605 4.243 13.4605 7C13.4605 9.757 10.9445 12 7.85197 12Z"
        fill="white"
      />
    </svg>
  );
};

export default SearchIcon;