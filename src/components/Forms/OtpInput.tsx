"use client"
import React, { useState, useRef, ChangeEvent } from "react";

interface OtpInputProps {
  length: number;
  onComplete: (otp: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ length, onComplete }) => {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const inputRefs = useRef<(HTMLInputElement | null)[]>(
    Array.from({ length }, () => null)
  );

  const handleInputChange = (index: number, value: string) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move focus to the next input
    if (value !== "" && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if OTP is complete
    if (!newOtp.includes("")) {
      onComplete(newOtp.join(""));
    }
  };

  const handleInputPaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const clipboardData = e.clipboardData
      .getData("text/plain")
      .slice(0, length);
    clipboardData
      .split("")
      .forEach((char, index) => handleInputChange(index, char));
  };

  return (
    <div className="flex my-6">
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          autoFocus={index === 0}
          className="w-14 h-14 text-xl mx-3 p-2 border rounded-md border-gray-200 bg-white focus:outline-none text-center"
          maxLength={1}
          value={otp[index]}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(index, e.target.value)
          }
          onPaste={handleInputPaste}
        />
      ))}
    </div>
  );
};

export default OtpInput;
