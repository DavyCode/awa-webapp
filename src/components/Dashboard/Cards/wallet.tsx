import InformationIcon from '@/assets/svg/information.svg'
import RevealTextIcon from '@/assets/svg/eye.svg'
import AddIcon from '@/assets/svg/add.svg'
import TransferIcon from '@/assets/svg/transfer.svg'
import PayBillsIcon from '@/assets/svg/pay-bills.svg'
import RemitNowIcon from '@/assets/svg/remit.svg'
import RequestWithdrawalIcon from "@/assets/svg/request-withdraw.svg";
import ClaimPensionIcon from "@/assets/svg/claim.svg";

import { formatAmount } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import ToolTip from '@/components/ToolTip'

const UserWalletCard = () => {

  return (
    <div className="flex gap-6">
      <div className="py-6 px-4 bg-white rounded-2xl border border-[#EBEBEB] w-full sm:w-[487px]">
        <div className="flex gap-2 items-center mb-2" id="walletBalance">
          <span className="text-sm text-[#292D32]">Total Wallet Balance</span>
          <span className="cursor-pointer">
            <ToolTip icon={<InformationIcon />} label="Total Wallet Balance" />
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="flex text-2xl text-[#333] font-bold">
            ₦{formatAmount(0)}
          </span>
          <span className="cursor-pointer">
            <RevealTextIcon />
          </span>
        </div>
        <div className="flex justify-between items-center mt-8">
          <Button
            type="button"
            className="py-[14.5px] h-[unset] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] rounded px-4 w-full font-medium sm:w-[134px] flex gap-2"
            style={{
              backgroundColor: "var(--primary)",
            }}
          >
            <AddIcon />
            Fund Wallet
          </Button>
          <Button
            type="button"
            variant="outline"
            className="py-[14.5px] h-[unset] bg-product-button-gradient rounded px-4 w-full sm:w-[134px] font-medium flex gap-2"
          >
            <TransferIcon />
            Transfer
          </Button>
          <Button
            type="button"
            variant="outline"
            className="py-[14.5px] h-[unset] bg-product-button-gradient rounded px-4 w-full sm:w-[134px] flex font-medium items-center gap-2"
          >
            <PayBillsIcon />
            Pay Bills
          </Button>
        </div>
      </div>
      <div className="py-6 px-4 bg-white rounded-2xl border border-[#EBEBEB] w-full sm:w-[530px]">
        <div className="flex gap-2 items-center mb-2" id="totalBalance">
          <span className="text-sm text-[#292D32]">
            Total Processed Balance
          </span>
          <span className="cursor-pointer">
            <ToolTip
              icon={<InformationIcon />}
              label="Total Processed Balance"
            />
          </span>
        </div>
        <div className="flex gap-2 items-center">
          <span className="flex text-2xl text-[#333] font-bold">
            ₦{formatAmount(124414324103)}
          </span>
          <span className="cursor-pointer">
            <RevealTextIcon />
          </span>
        </div>
        <div className="flex gap-[13px] items-center mt-8 w-full sm:w-[466px]">
          <Button
            type="button"
            variant="outline"
            className="py-[14.5px] h-[unset] bg-product-button-gradient rounded px-4 w-full sm:w-[134px] flex font-medium items-center gap-2"
          >
            <RemitNowIcon />
            Remit Now
          </Button>
          <Button
            type="button"
            variant="outline"
            className="py-[14.5px] h-[unset] bg-product-button-gradient rounded px-4 w-full sm:w-[191px] flex font-medium items-center gap-2 text-sm"
          >
            <RequestWithdrawalIcon />
            Request Withdrawal
          </Button>
          <Button
            type="button"
            variant="outline"
            className="py-[14.5px] h-[unset] bg-product-button-gradient rounded px-4 w-full sm:w-[157px] flex font-medium items-center gap-2"
          >
            <ClaimPensionIcon />
            Claim pension
          </Button>
        </div>
      </div>
    </div>
  );
}

export default UserWalletCard
