import { Button } from "@/components/Forms/Button";
import RadioButton from "@/components/Forms/Button/radio";
import React from "react";

const radioBtnList = ["Monthly", "Quarterly", "Bi-monthly", "Anually"];

const PaymentTermsModal = () => {
  return (
    <div className="mt-[26px]">
      <h3 className="text-[16px] font-[600] text-[#1A1A1A]">
        How would you like to make this payment{" "}
      </h3>
      <div className="mt-5 space-y-6 ">
        <section>
          <div className="flex justify-between items-center ">
            <p className="text-[#1A1A1A] font-[500] leading-[20px]">
              Enable recurring payments
            </p>
            <div>
              <RadioButton />
            </div>
          </div>
          <p className="w-10/12">
            Unlock flexibility with one-off payments. Pay as you go, on your
            terms!
          </p>
          {/* <div className="flex w-8/12 justify-start">
            {radioBtnList.map((item, index) => (
              <div key={index} className="flex items-center text-[12px] mr-4">
                <RadioButton className="w-6 h-6" />
                {item}
              </div>
            ))}
          </div> */}
        </section>

        <section>
          <div className="flex justify-between items-center ">
            <p className="text-[#1A1A1A] font-[500] leading-[20px]">
              Enable one-off payments
            </p>
            <div>
              <RadioButton />
            </div>
          </div>
          <p className="w-10/12">
            Never run out of balance when trying to make payments.You can change
            these settings on your prefreences anytime!
          </p>
        </section>

        <div className="flex justify-center">
          <div className="w-10/12 h-[62px] bg-[#DAFEDA] rounded flex items-center justify-center text-[#244D24]">
            <p className="font-[600]">
              ₦140,500 X <span className="font-[400]">3months </span>= ₦421,500
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            className="w-full px-20 py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded "
            style={{
              backgroundColor: "var(--primary)",
            }}
          >
            Next
          </Button>
        </div>
        <div className="flex justify-center">
          <p className="text-[#1A1A1A]">You can cancel anytime</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentTermsModal;
