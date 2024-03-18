import { clsx } from "clsx";
import { Input } from "../ui/input";
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
}

const InputFieldPhoneNumber = ({
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
  return (
    <div className="w-full">
      <div className="w-full">
        <span className="text-base text-[#333] font-medium">{label}</span>
        <div
          className={clsx({
            ["flex justify-between items-center border border-solid border-gray-200 focus:border-gray-200 focus:outline-none placeholder:text-color-100 rounded-md overflow-hidden mt-2"]:
              true,
            [additionalClassname]: !!additionalClassname,
          })}
        >
          {register ? (
            <div className="flex items-center px-2 w-full">
              <span className="w-full pr-2 text-gray-400 inline-block border-r border-gray-200">
                +234{" "}
              </span>
              <Input placeholder={placeholder} type={type} />
              {/*  <input
                type={type}
                id={name}
                maxLength={9}
                placeholder={placeholder}
                disabled={disabled}
                className="w-full h-10 pl-2 border-none pr-4 focus:outline-0 appearance-none leading-tight"
                {...register(name)}
              /> */}
            </div>
          ) : (
            <div className="flex items-center px-2 w-full">
              <span className="w-fit pr-2 text-gray-400 inline-block border-r border-gray-200">
                +234{" "}
              </span>
              <Input placeholder={placeholder} type={type} className="border-none" />
            </div>
          )}
          {icon !== undefined ? (
            <span className="px-2" aria-label="Open">
              {icon}
            </span>
          ) : (
            ""
          )}
        </div>
      </div>
      {error ? (
        <p className="flex items-center lowercase text-[#ED2E7E] text-xs">
          {error}
        </p>
      ) : null}
    </div>
  );
};

export default InputFieldPhoneNumber;
