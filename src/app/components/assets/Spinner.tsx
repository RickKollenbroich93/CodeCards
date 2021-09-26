import React from 'react';

const SpinnerIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="350"
      height="350"
      viewBox="0 0 350 350"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M195.388 15.9053C190.072 -5.31348 159.95 -5.31348 154.613 15.9053L153.06 22.1615C152.151 25.7973 150.286 29.1237 147.658 31.7954C145.03 34.4672 141.735 36.387 138.115 37.3557C134.494 38.3244 130.681 38.3066 127.07 37.3043C123.459 36.3019 120.182 34.3514 117.579 31.6553L113.094 27.0396C97.8911 11.3115 71.7942 26.3834 77.8098 47.4053L79.5598 53.6178C80.5881 57.2172 80.6356 61.0261 79.6973 64.65C78.759 68.274 76.8691 71.5812 74.2232 74.2294C71.5773 76.8775 68.2716 78.7702 64.6484 79.7116C61.0253 80.6529 57.2164 80.6087 53.6161 79.5834L47.4036 77.8115C26.4036 71.7959 11.3098 97.8928 27.0379 113.096L31.6536 117.58C34.3497 120.183 36.3002 123.46 37.3025 127.071C38.3049 130.682 38.3227 134.496 37.354 138.116C36.3853 141.737 34.4655 145.032 31.7937 147.66C29.122 150.288 25.7956 152.153 22.1598 153.062L15.9036 154.615C-5.31519 159.93 -5.31519 190.052 15.9036 195.39L22.1598 196.943C25.7956 197.851 29.122 199.717 31.7937 202.345C34.4655 204.973 36.3853 208.268 37.354 211.888C38.3227 215.508 38.3049 219.322 37.3025 222.933C36.3002 226.544 34.3497 229.821 31.6536 232.424L27.0379 236.908C11.3098 252.111 26.3817 278.208 47.4036 272.193L53.6161 270.443C57.2178 269.412 61.0295 269.364 64.656 270.304C68.2825 271.243 71.5918 273.135 74.2407 275.784C76.8896 278.433 78.7818 281.742 79.7209 285.368C80.66 288.995 80.612 292.807 79.5817 296.408L77.8098 302.599C71.7942 323.599 97.8911 338.693 113.094 322.965L117.579 318.349C120.182 315.653 123.459 313.702 127.07 312.7C130.681 311.698 134.494 311.68 138.115 312.649C141.735 313.617 145.03 315.537 147.658 318.209C150.286 320.881 152.151 324.207 153.06 327.843L154.613 334.099C159.929 355.318 190.05 355.318 195.388 334.099L196.941 327.843C197.85 324.207 199.715 320.881 202.343 318.209C204.971 315.537 208.266 313.617 211.886 312.649C215.507 311.68 219.32 311.698 222.931 312.7C226.542 313.702 229.819 315.653 232.422 318.349L236.907 322.965C252.11 338.693 278.207 323.621 272.191 302.599L270.441 296.386C269.411 292.785 269.363 288.973 270.302 285.347C271.241 281.72 273.133 278.411 275.782 275.762C278.431 273.113 281.74 271.221 285.367 270.282C288.993 269.343 292.805 269.391 296.407 270.421L302.597 272.193C323.597 278.208 338.691 252.111 322.963 236.908L318.347 232.424C315.651 229.821 313.701 226.544 312.698 222.933C311.696 219.322 311.678 215.508 312.647 211.888C313.616 208.268 315.535 204.973 318.207 202.345C320.879 199.717 324.205 197.851 327.841 196.943L334.097 195.39C355.316 190.074 355.316 159.952 334.097 154.615L327.841 153.062C324.205 152.153 320.879 150.288 318.207 147.66C315.535 145.032 313.616 141.737 312.647 138.116C311.678 134.496 311.696 130.682 312.698 127.071C313.701 123.46 315.651 120.183 318.347 117.58L322.963 113.096C338.691 97.8928 323.619 71.7959 302.597 77.8115L296.385 79.5615C292.785 80.5898 288.976 80.6373 285.353 79.699C281.729 78.7607 278.421 76.8708 275.773 74.2249C273.125 71.579 271.232 68.2733 270.291 64.6501C269.35 61.027 269.394 57.2181 270.419 53.6178L272.191 47.4053C278.207 26.4053 252.11 11.3115 236.907 27.0396L232.422 31.6553C229.819 34.3514 226.542 36.3019 222.931 37.3043C219.32 38.3066 215.507 38.3244 211.886 37.3557C208.266 36.387 204.971 34.4672 202.343 31.7954C199.715 29.1237 197.85 25.7973 196.941 22.1615L195.388 15.9053ZM175 284.311C160.514 284.516 146.132 281.84 132.689 276.438C119.246 271.036 107.01 263.017 96.6938 252.845C86.3773 242.673 78.1852 230.553 72.5937 217.187C67.0022 203.822 64.1227 189.479 64.1227 174.991C64.1227 160.503 67.0022 146.16 72.5937 132.795C78.1852 119.43 86.3773 107.309 96.6938 97.1375C107.01 86.9658 119.246 78.946 132.689 73.5441C146.132 68.1422 160.514 65.466 175 65.6709C203.997 65.6709 231.806 77.1897 252.309 97.6933C272.813 118.197 284.332 146.006 284.332 175.002C284.332 203.999 272.813 231.807 252.309 252.311C231.806 272.815 203.997 284.333 175 284.333V284.311Z"
        fill="#C4C4C4"
        fill-opacity="0.05"
      />
    </svg>
  );
};

export default SpinnerIcon;
