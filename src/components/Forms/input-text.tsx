import { cn } from "@/lib/utils";
import EyeIcon from "@/assets/svg/eye.svg";
import EyeSlashIcon from "@/assets/svg/eye-slash.svg";
import { useState } from "react";
import { Button } from "../ui/button";

interface IProps {
  type: string;
  label?: string;
  placeholder?: string;
  name: string;
  register?: any;
  icon?: JSX.Element;
  error?: any;
  additionalClassname?: any;
  value?: any;
  disabled?: boolean;
  showIcon?: boolean;
}

const InputField = ({
  type,
  placeholder,
  name,
  error,
  register,
  label,
  icon,
  additionalClassname,
  disabled = false,
  showIcon,
}: IProps): JSX.Element => {
  const [showPassword, setshowPassword] = useState(false);
  console.log("showPassword :>> ", showPassword);
  return (
    <div className="">
      <div className="w-full">
        <span className="text-base text-[#333] font-medium">{label}</span>
        <div
          className={cn({
            ["flex justify-between items-center border border-solid border-gray-200 focus:border-gray-200 focus:outline-none placeholder:text-color-100 rounded-md overflow-hidden mt-1"]:
              true,
            [additionalClassname]: !!additionalClassname,

            "border-red-600 border": !!error,
          })}
        >
          {register ? (
            <input
              type={showPassword ? "text" : type}
              id={name}
              placeholder={placeholder}
              disabled={disabled}
              className={cn(
                "w-full leading-[28px] focus:outline-0 appearance-none py-[10px] px-4 placeholder:text-[#D6D6D6]",
              )}
              {...register(name)}
            />
          ) : (
            <input
              type={showPassword ? "text" : type}
              id={name}
              placeholder={placeholder}
              disabled={disabled}
              className={cn(
                "w-full focus:outline-0 appearance-none leading-[28px] py-[10px] px-4 placeholder:text-[#D6D6D6]",
              )}
            />
          )}
          {(icon || showIcon) !== undefined ? (
            <Button
              className="px-2"
              aria-label="Open"
              variant={"ghost"}
              onClick={() => setshowPassword(!showPassword)}
              type="button"
            >
              {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
            </Button>
          ) : (
            ""
          )}
        </div>
      </div>
      {error ? (
        <p className="flex items-center lowercase text-red-600 text-xs">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default InputField;
