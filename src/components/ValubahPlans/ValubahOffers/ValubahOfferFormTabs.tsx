"use client";
import React, { useState } from "react";
import Tabs from "../../Tabs";
import SwitchFormEngine from "./ValubahOfferSwitchForm";

const ValubahOfferFormTabs = () => {
  const [currentTab, setCurrentTab] = useState("Benefits");

  const [tabMenus, setTabs] = useState([
    {
      label: "Benefits",
    },
    {
      label: "Details",
    },
    {
      label: "Terms",
    },
  ]);
  return (
    <div className="mt-[23px] mb-[22px] mr-[20px]">
      <Tabs
        tabsData={tabMenus}
        handleTabClick={(tabName) => setCurrentTab(tabName)}
        activeTabLabel={currentTab}
      />
      <hr />
      <SwitchFormEngine currentTab={currentTab} />
    </div>
  );
};

export default ValubahOfferFormTabs;
