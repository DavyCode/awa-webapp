"use client";
import { useOTPContext } from "@/context/OTPContext";
import { useRef, ChangeEvent } from "react";

interface OtpInputProps {
  length: number;
  onComplete: (otpInput: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ length, onComplete }) => {
  const { otpInput, setOtpInput } = useOTPContext();
  const inputRefs = useRef<(HTMLInputElement | null)[]>(
    Array.from({ length }, () => null),
  );

  const handleInputChange = (index: number, value: string) => {
    const newOtp = [...otpInput];
    newOtp[index] = value;
    setOtpInput(newOtp);

    // Move focus to the next input
    if (value !== "" && index < length - 1 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1]?.focus();
    }
    onComplete(newOtp.join("").trim());
    // Check if OTP is complete
    // if (!newOtp.includes("")) {
    //   onComplete(newOtp.join(""));
    // }
  };

  return (
    <div className="flex my-6">
      {Array.from({ length }, (_, index) => (
        <input
          key={index}
          ref={(el) => (inputRefs.current[index] = el)}
          type="text"
          autoFocus={index === 0}
          className="w-14 h-14 text-xl mx-3 p-2 border rounded-md border-gray-200 bg-white text-center focus:outline-[#3D663D]"
          maxLength={1}
          value={otpInput[index]}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            handleInputChange(index, e.target.value)
          }
          //   onPaste={handleInputPaste}
        />
      ))}
    </div>
  );
};

export default OtpInput;
