"use client"
import React, { useState } from 'react'
import clsx from "clsx";
interface IProps {
  type?: string;
  label?: string;
  placeholder?: string;
  name: string;
  register?: any;
  icon?: JSX.Element;
  error?: any;
  additionalClassname?: any;
  value?: any;
  disabled?: boolean;
}

const InputPassword = ({
  type,
  placeholder,
  name,
  error,
  register,
  label,
  icon,
  additionalClassname,
  disabled = false,
}: IProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <label htmlFor="password" className="flex-1 text-gray-400">
        {label}
      </label>
      <div
        className={clsx({
          ["flex justify-between items-center border border-solid border-gray-200 focus:border-gray-200 focus:outline-none placeholder:text-color-100 rounded-md overflow-hidden mt-1"]:
            true,
          [additionalClassname]: !!additionalClassname,
        })}
      >
        <input
          type={showPassword ? "text" : "password"}
          id={name}
          placeholder={placeholder}
          disabled={disabled}
          className="w-full h-10 px-4 focus:outline-0 border-none shadow appearance-none leading-tight"
          /* {...register(name)} */
        />
        {!showPassword ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-10 h-10 text-gray-300 px-2 hover:text-gray-900 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-300 hover:text-gray-900 cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
            />
          </svg>
        )}
      </div>
    </div>
  );
};

export default InputPassword