import React from 'react'

interface IProp {
    fill?: string
}

const PeopleCircleIcon: React.FC<IProp> = ({ fill = "#3D663D" }) => {
  return (
    <svg
      width="57"
      height="58"
      viewBox="0 0 57 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.5" width="57" height="57" rx="28.5" fill={fill} />
      <path
        opacity="0.4"
        d="M34.4976 24.16C34.4376 24.15 34.3676 24.15 34.3076 24.16C32.9276 24.11 31.8276 22.98 31.8276 21.58C31.8276 20.15 32.9776 19 34.4076 19C35.8376 19 36.9876 20.16 36.9876 21.58C36.9776 22.98 35.8776 24.11 34.4976 24.16Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M33.4675 31.4399C34.8375 31.6699 36.3475 31.4299 37.4075 30.7199C38.8175 29.7799 38.8175 28.2399 37.4075 27.2999C36.3375 26.5899 34.8075 26.3499 33.4375 26.5899"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M22.4675 24.16C22.5275 24.15 22.5975 24.15 22.6575 24.16C24.0375 24.11 25.1375 22.98 25.1375 21.58C25.1375 20.15 23.9875 19 22.5575 19C21.1275 19 19.9775 20.16 19.9775 21.58C19.9875 22.98 21.0875 24.11 22.4675 24.16Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        opacity="0.4"
        d="M23.4975 31.4399C22.1275 31.6699 20.6175 31.4299 19.5575 30.7199C18.1475 29.7799 18.1475 28.2399 19.5575 27.2999C20.6275 26.5899 22.1575 26.3499 23.5275 26.5899"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.5 31.63C28.44 31.62 28.37 31.62 28.31 31.63C26.93 31.58 25.83 30.45 25.83 29.05C25.83 27.62 26.98 26.47 28.41 26.47C29.84 26.47 30.99 27.63 30.99 29.05C30.98 30.45 29.88 31.59 28.5 31.63Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.59 34.7799C24.18 35.7199 24.18 37.2599 25.59 38.1999C27.19 39.2699 29.81 39.2699 31.41 38.1999C32.82 37.2599 32.82 35.7199 31.41 34.7799C29.82 33.7199 27.19 33.7199 25.59 34.7799Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default PeopleCircleIcon