import ButtonTabs from "@/components/Tabs/button-tabs";
import React from "react";
import ManuallyEntry from "./ManuallyEntry";
import UploadFile from "./UploadFile";

  const tabsData = [
    { label: "Enter manually", content: <ManuallyEntry /> },
    { label: "Upload a file", content: <UploadFile /> },
  ];

const BeneficiariesDetails = () => {
  return (
      <ButtonTabs tabsData={tabsData} />
  );
};

export default BeneficiariesDetails;
