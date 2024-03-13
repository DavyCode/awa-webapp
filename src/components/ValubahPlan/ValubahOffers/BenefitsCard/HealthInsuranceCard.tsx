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
  { text: " Malaria Drugs" },
  { text: "Telemedicine" },
  { text: "Typhoid Tests" },
  { text: "Heart Check" },
  { text: "Diabetes Check" },
];

const HealthInsuranceCard = () => {
  return (
    <div className="border rounded-[8px] py-4 pl-4 pr-[21px]">
      <h2 className="font-bold text text-[#1A1A1A] leading-[20px] text-[14px]">
        Health Insurance (Pharmacy alone)
      </h2>

      <ul className="flex flex-wrap w-[439px]">
        {HealthInsuranceList.map((item, index) => (
          <li key={index} className="flex items-center gap-2 mt-4 mr-4">
            <TickCircleIcon />
            <p className="text-[14px] leading-[20px] font-[400] text-[#333]">
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
