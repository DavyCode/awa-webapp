'use client'
import React, {useState } from 'react'
import EnrolHeader from './Header'
import FormTabs from './FormTabs'

const EnrolOnBoarding = () => {
  const [isEnrolOpen, setIsEnrolOpen] = useState(false)

    return (
      <>
        {isEnrolOpen && (
          <div className="absolute -top-[172px] w-full h-full z-50 flex right-0 items-start bg-opacity-75 bg-black flex-col">
            <div className="w-full sm:w-[879px] absolute right-0 flex justify-end">
              <div className={`bg-white w-full shadow-xl overflow-hidden `}>
                <EnrolHeader />
                <FormTabs />
              </div>
            </div>
          </div>
        )}
      </>
    );
}

export default EnrolOnBoarding