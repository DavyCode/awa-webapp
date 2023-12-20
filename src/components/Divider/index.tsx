import React from "react";

const OrDivider = ({ content }: any): JSX.Element => {
  return (
    <div className="relative flex py-3 items-center w-full">
      <div className="flex-grow border-t border-gray-200"></div>
      <span className="flex-shrink mx-2 text-gray-900 lowercase text-xs">
        {content}
      </span>
      <div className="flex-grow border-t border-gray-200"></div>
    </div>
  );
};

export default OrDivider;
