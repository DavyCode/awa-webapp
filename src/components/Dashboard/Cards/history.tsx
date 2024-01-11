import { DummyTransactionInfo } from '@/lib/data';
import { formatAmount } from '@/lib/utils';
import clsx from 'clsx';
import React from 'react'

const UserTransactionHistory = () => {
  return (
    <div className="py-[25px] flex flex-col w-full my-6 border sm:w-[1025px] sm:pr-[35px] rounded-2xl px-[22px]">
      <div className="flex justify-between items-center">
        <p className="text-base text-[#333]">Transaction History</p>
        <span className="text-sm text-[#3D663D] underline font-semibold">
          See all
        </span>
      </div>
      {DummyTransactionInfo.map(
        ({ title, createdDate, amount, status }, index) => (
          <div
            className="flex justify-between items-center mt-6 p-2 border-b border-b-[#EBEBEB] last:border-none"
            key={index}
          >
            <div className="flex gap-2 items-center">
              <div className="size-8 rounded-full bg-[#EBEBEB]"></div>
              <div className="flex flex-col gap-2">
                <h1 className="text-sm text-[#1a1a1a]">{title}</h1>
                <span className="text-grey-400 text-xs">{createdDate}</span>
              </div>
            </div>
            <div className="flex flex-col">
              <p className="text-base font-bold leading-[19px]">
                ₦{formatAmount(amount)}
              </p>
              <span
                className={clsx({
                  "text-xs font-normal float-right text-right": true,
                  "text-[#3D663D]": status === "Successful",
                  "text-[#CFAC17]": status === "Processing",
                })}
              >
                {status}
              </span>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default UserTransactionHistory