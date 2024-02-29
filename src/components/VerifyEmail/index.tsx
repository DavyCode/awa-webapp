import React from 'react'
import { Button } from '../ui/button';

const VerifyEmailComponent = () => {
  return (
    <div className="w-full sm:max-w-[1030px] mb-6 rounded-2xl border p-[23px] border-[#EBEBEB]">
      <div className="w-full sm:w-[548px] flex flex-col gap-y-4">
        <h1 className="text-lg text-[#1a1a1a] font-bold">
          Update your email address
        </h1>
        <p className="text-sm text-[#333]">
          Please update your email address,to ensure you receive important
          updates Update
        </p>
        <Button
          type="button"
          className="py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded px-4 my-4 sm:w-[188px]"
          style={{
            backgroundColor: "var(--primary)",
          }}
        >
          Verify email address
        </Button>
      </div>
    </div>
  );
}

export default VerifyEmailComponent