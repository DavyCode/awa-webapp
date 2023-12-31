import ValidatedIcon from '@/assets/icons/ValidatedIcon';
import React from 'react'

interface ValidatedIconProps {
    isValid?: boolean;
    message?: any
}
const PasswordValidation:React.FC<ValidatedIconProps> = ({ isValid = true, message}) => {
  return (
    <ul className="flex gap-2 flex-col mt-2">
      <li className="flex items-center gap-2">
        <ValidatedIcon stroke={isValid ? "#3D663D" : ""} />
        <span className={isValid ? "text-[#3D663D]" : ""}>At least one Lowercase</span>
      </li>
      <li className="flex items-center gap-2">
        <ValidatedIcon stroke={isValid ? "#3D663D" : ""} />
        <span className={isValid ? "text-[#3D663D]" : ""}>At least one Uppercase</span>
      </li>
      <li className="flex items-center gap-2">
        <ValidatedIcon stroke={isValid ? "#3D663D" : ""} />
        <span>At least one number</span>
      </li>
      <li className="flex items-center gap-2">
        <ValidatedIcon stroke={isValid ? "#3D663D" : ""} />
        <span>At least one special number</span>
      </li>
    </ul>
  );
}

export default PasswordValidation