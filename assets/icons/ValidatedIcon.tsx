import React from 'react'

interface IProp {
    stroke?: string
}

const ValidatedIcon: React.FC<IProp> = ({ stroke = "#333333" }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.99967 14.6666C11.6663 14.6666 14.6663 11.6666 14.6663 7.99998C14.6663 4.33331 11.6663 1.33331 7.99967 1.33331C4.33301 1.33331 1.33301 4.33331 1.33301 7.99998C1.33301 11.6666 4.33301 14.6666 7.99967 14.6666Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.16699 8.00001L7.05366 9.88668L10.8337 6.11334"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ValidatedIcon