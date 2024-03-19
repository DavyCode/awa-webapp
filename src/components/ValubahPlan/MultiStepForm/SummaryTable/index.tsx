import { Button } from "@/components/Forms/Button";
import React from "react";
import { DataTable } from "./DataTable";
import { BeneficiarySummaryData } from "@/lib/data";
import { columns } from "./columns";

const Summary = () => {
  return (
    <div className="space-y-6 h-[100vh]">
      <DataTable columns={columns} data={BeneficiarySummaryData} />
      <div className="flex justify-center">
        <Button
          type="submit"
          className="w-full h-[62px] bg-[#DAFEDA] rounded flex flex-col justify-center text-[#244D24]"
        >
          <span className="text-[12px] leading-5">Subtotal</span>
          <span className="font-[700]">₦140,500/month</span>
        </Button>
      </div>
      <div className="w-6/12 flex flex-col mx-auto space-y-4">
        <div className="flex justify-between">
          <p>Total:</p>
          <span>₦140,000</span>
        </div>
        <div className="flex justify-between">
          <p>Transaction charge:</p>
          <span>₦500</span>
        </div>
      </div>
      <div className="flex justify-center">
        <Button
          type="submit"
          className="w-[80%] px-20 py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded "
          style={{
            backgroundColor: "var(--primary)",
          }}
          onClick={() => console.log("true")}
        >
          Proceed
        </Button>
      </div>
    </div>
  );
};

export default Summary;
