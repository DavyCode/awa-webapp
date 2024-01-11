import React from 'react'
import Image from 'next/image'

import NotificationBell from '@/assets/svg/notification-bell.svg'
import ChevronDownArrow from '@/assets/svg/drop-down-arrow.svg'

const LoggerInfo = () => {
  return (
    <div className="w-full sm:pt-[13px] sm:pb-[12px] flex justify-end items-center border border-b-[#EBEBEB] mb-4 sm:pl-10 sm:pr-[77px]">
        <div className="w-full sm:w-[312px] sm:h-[48px] justify-between flex items-center gap-[28px]">
            <div className="w-[49px] h-11 relative flex justify-center items-center">
                <div className="rounded-full w-10 h-10 bg-[#F1F1F1] flex justify-center items-center">
                  <NotificationBell />
                </div>
                <span className="w-[22px] h-5 rounded-full bg-[#3D663D] text-white text-center absolute top-0 text-xs -right-1 flex justify-center items-center">10</span>
            </div>
            <div className="w-full sm:w-[235px] flex items-center justify-between gap-2">
              <div className="w-[42px] h-[40px] rounded-full relative bg-red-500 overflow-hidden">
                <Image src="/avatar.png" fill className="absolute object-center" priority alt="avatar" />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-base text-[#1a1a1a]">Jenny Wilson</p>
                <div className="flex gap-2 justify-between items-center">
                  <span className="text-gray-400 text-sm">jen.wilson@example.com</span>
                  <ChevronDownArrow />
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default LoggerInfo