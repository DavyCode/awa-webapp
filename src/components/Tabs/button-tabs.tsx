"use client";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ButtonTabsData {
    label: string;
    content: JSX.Element
}

interface ButtonTabsProps {
  tabsData: ButtonTabsData[];
}

const ButtonTabs:React.FC<ButtonTabsProps> = ({ tabsData}) => {

  const defaultTabValue = tabsData.length > 0 ? tabsData[0].label : "";

  return (
    <Tabs
    defaultValue={defaultTabValue}
    className="w-full gap-2 bg-white rounded-[8px]"
    >
    <TabsList className="w-full sm:w-[252px] h-12 py-2 border border-[#EBEBEB] sm:mb-[24px]">
        {tabsData.map((tab) => (
        <TabsTrigger key={tab.label} value={tab.label} className="h-8 rounded-md sm:w-[118px]">
            {tab.label}
        </TabsTrigger>
        ))}
    </TabsList>
    {tabsData.map((tab) => (
        <TabsContent key={tab.label} value={tab.label}>
        {tab.content}
        </TabsContent>
    ))}
    </Tabs>
  );
};

export default ButtonTabs;
