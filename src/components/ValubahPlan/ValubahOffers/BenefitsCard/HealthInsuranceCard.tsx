import TickCircleIcon from "@/assets/icons/TickCircleIcon";
import React from "react";

interface OfferCardProps {
  title: string;
  text: string;
  span: string;
}

const HealthInsuranceList = [
  {
    text: "Access to over 1000 pharmacies across Nigeria ",
    span: "(view here)",
  },
  { text: "Malaria test" },
  { text: "Malaria Drugs" },
  { text: "Telemedicine" },
  { text: "Typhoid Tests" },
  { text: "Heart Check" },
  { text: "Diabetes Check" },
];

const HealthInsuranceCard = () => {
  return (
    <div className="border rounded-[8px] py-4 pl-4 pr-[21px]">
      <h2 className="font-bold text-[#1A1A1A] text-sm">
        Health Insurance (Pharmacy alone)
      </h2>

      <ul className="flex justify-between flex-wrap w-full sm:w-[439px] gap-x-4">
        {HealthInsuranceList.map((item, index) => (
          <li key={index} className="flex items-center gap-2 mt-4 sm:mr-4">
            <span className="w-4 h-4">
              <TickCircleIcon />
            </span>
            <p className="text-sm text-[#333]">
              {item.text}
              <span className="underline text-[#336F0A]">{item.span}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HealthInsuranceCard;
