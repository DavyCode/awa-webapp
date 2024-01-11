
import InformationIcon from '@/assets/svg/information.svg'
import RevealTextIcon from '@/assets/svg/eye.svg'
import AddIcon from '@/assets/svg/add.svg'
import TransferIcon from '@/assets/svg/transfer.svg'
import PayBillsIcon from '@/assets/svg/pay-bills.svg'
import UserPlanIcon from '@/assets/svg/user-plan.svg'

import { formatAmount } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const UserPlanCard = () => {
    return (
      <div className="flex gap-6 mt-6">
        <div className="py-6 px-4 bg-white rounded-2xl border border-[#EBEBEB] w-full sm:w-[544px]">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <UserPlanIcon />
            <div className="w-full sm:w-[248px] bg-[#F6FFF6] p-2 flex gap-[18px] justify-center">
              <div className="w-full sm:w-[68px] text-[#3D663D]">
                <h1 className="font-medium text-sm">2</h1>
                <span className="text-xs italic">Active plans</span>
              </div>
              <div className="w-full sm:w-[75px] text-[#3D663D]">
                <h1 className="font-medium text-sm">1</h1>
                <span className="text-xs italic">Expired plans</span>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center mb-2">
            <span className="text-sm text-[#292D32]">Total Valubah plans</span>
            <span className="cursor-pointer">
              <InformationIcon />
            </span>
          </div>
          <h1 className="sm:text-2xl font-bold text-[#333] mb-4">3</h1>
          <div className="flex justify-between items-center">
            <Button
              type="button"
              variant="outline"
              className="py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#EBEBEB] rounded px-4 w-full font-medium sm:w-[134px] flex gap-2"
            >
              Add new
            </Button>
            <Button
              type="button"
              variant="outline"
              className="py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#EBEBEB] rounded px-4 w-full sm:w-[134px] font-medium flex gap-2"
            >
              Renew
            </Button>
            <Button
              type="button"
              variant="outline"
              className="py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#EBEBEB] rounded px-4 w-full sm:w-[134px] flex font-medium items-center gap-2"
            >
              View plans
            </Button>
          </div>
        </div>
        <div className="py-6 px-4 bg-white rounded-2xl border border-[#EBEBEB] w-full sm:w-[457px]">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <UserPlanIcon />
          </div>
          <div className="flex gap-2 items-center my-2">
            <span className="text-sm text-[#292D32]">Total Beneficiaries</span>
            <span className="cursor-pointer">
              <InformationIcon />
            </span>
          </div>
          <h1 className="sm:text-2xl font-bold text-[#333] mb-8">3</h1>
          <div className="flex justify-between items-center">
            <Button
              type="button"
              variant="outline"
              className="py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#EBEBEB] rounded px-4 w-full font-medium sm:w-[134px] flex gap-2"
            >
              View Beneficiaries
            </Button>
          </div>
        </div>
        
      </div>
    );
}

export default UserPlanCard