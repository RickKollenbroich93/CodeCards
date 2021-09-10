import React from 'react';

const ScrollDownIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="20"
      height="15"
      viewBox="0 0 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M19.8839 0.536C19.799 0.374445 19.6716 0.239136 19.5155 0.144676C19.3593 0.0502152 19.1804 0.000190289 18.9979 0H0.997861C0.815705 0.000752409 0.6372 0.0511466 0.481542 0.145763C0.325885 0.240379 0.198964 0.375638 0.11443 0.536993C0.0298962 0.698348 -0.00905316 0.879695 0.0017708 1.06153C0.0125948 1.24337 0.0727825 1.41881 0.175861 1.569L9.17586 14.569C9.2676 14.7022 9.39036 14.8112 9.53355 14.8864C9.67675 14.9617 9.83609 15.001 9.99786 15.001C10.1596 15.001 10.319 14.9617 10.4622 14.8864C10.6054 14.8112 10.7281 14.7022 10.8199 14.569L19.8199 1.569C19.9239 1.41912 19.985 1.24357 19.9962 1.06144C20.0075 0.879317 19.9687 0.697581 19.8839 0.536ZM9.99786 12.243L2.90586 2H17.0899L9.99786 12.243Z"
        fill="white"
      />
    </svg>
  );
};

export default ScrollDownIcon;