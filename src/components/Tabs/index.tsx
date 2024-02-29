import React from "react";
import Tab from "./tab";
import clsx from 'clsx';

interface TabsProps {
  tabsData: {
    icon?: JSX.Element;
    label: string;
  }[];
  handleTabClick: (arg: string) => void;
  activeTabLabel: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabsData,
  handleTabClick,
  activeTabLabel,
}) => {
  return (
    <ul className={clsx({
      ["w-full flex justify-between"]: true
    })}>
      {tabsData.map((datum) => {
        return (
          <Tab
            isActive={datum.label === activeTabLabel}
            key={datum.label}
            label={datum.label}
            handleClick={handleTabClick}
          />
        );
      })}
    </ul>
  );
};

export default Tabs;
