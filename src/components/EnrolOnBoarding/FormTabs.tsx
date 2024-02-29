'use client'
import React, { useState } from 'react'
import Tabs from '../Tabs';
import SwitchFormEngine from './SwitchForm';

const FormTabs = () => {
      const [currentTab, setCurrentTab] = useState("Personal data");

      const [tabMenus, setTabs] = useState([
        {
        label: "Personal data",
        },
        {
        label: "Employment Details",
        },
        {
        label: "Next of Kin",
        },
        {
        label: "Contributors Certificate",
        },
        {
        label: "Checklist of required documents",
        },
    ])
  return (
    <div className="mt-[23px] mb-[22px] ml-[35px] mr-[20px]">
      <Tabs
        tabsData={tabMenus}
        handleTabClick={(tabName) => setCurrentTab(tabName)}
        activeTabLabel={currentTab}
      />
      <SwitchFormEngine currentTab={currentTab} /> 
    </div>
  );
}

export default FormTabs