'use client'
import React from 'react'
import DirectionIcon from '@/assets/svg/polygon-left.svg'
import CloseIcon from '@/assets/svg/close-circle.svg'
import {Button} from '@/components/ui/button'

interface TourProps {
  isLeft?: boolean
}
const Tour:React.FC<TourProps> = ({ isLeft=true }) => {
  return (
    <div className="flex z-50 relative">
      {isLeft && (
        <div className="mt-2">
          <DirectionIcon />
        </div>
      )}
      <div className='flex flex-col h-[174px]'>
      <div className="w-full sm:w-[289px]  rounded-2xl bg-[#3D663D] p-4 text-white -ml-2">
        <div className="flex justify-between">
          <div className="flex flex-col w-full sm:w-[198px]">
            <p className="text-base font-bold mb-1">Explore navigation</p>
            <span className="text-xs text-[#ECF0EC]">
              All essential options are available at a single place
            </span>
          </div>
          <CloseIcon fill="#fff" />
        </div>
        <div className="w-full flex justify-end h-[30px] mt-4">
          <div className="flex sm:w-[134px] justify-end gap-4 ">
            <span>1 of 6</span>
            <Button className="bg-white text-black">Next</Button>
          </div>
        </div>
      </div>
      {!isLeft && (
        <div className="-rotate-90 absolute bottom-2 left-20 mx-auto">
          <DirectionIcon />
        </div>
      )}
      </div>
    </div>
  );
}

export default Tour