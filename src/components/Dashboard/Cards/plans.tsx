
import InformationIcon from '@/assets/svg/information.svg'
import RevealSmallIcon from '@/assets/svg/eye-small.svg'
import RenewIcon from '@/assets/svg/renew.svg'
import UserPlanIcon from '@/assets/svg/user-plan.svg'
import BuyPlanIcon from '@/assets/svg/buy-valubah.svg'
import InviteIcon from "@/assets/svg/invite.svg"
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation'

const UserPlanCard = () => {
  const router = useRouter()
    return (
      <div className="flex gap-6 mt-6">
        <div className="py-6 px-4 bg-white rounded-2xl border border-[#EBEBEB] w-full sm:w-[544px]">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <UserPlanIcon />
            <div className="w-full sm:w-[284px] bg-[#F6FFF6] p-2 flex gap-[18px] justify-center">
              <div className="w-full sm:w-[68px] text-[#3D663D]">
                <h1 className="font-medium text-sm">0</h1>
                <span className="text-xs italic">Active plans</span>
              </div>
              <div className="w-full sm:w-[79px] text-[#3D663D]">
                <h1 className="font-medium text-sm">1</h1>
                <span className="text-xs italic">Pending plans</span>
              </div>
              <div className="w-full sm:w-[75px] text-[#3D663D]">
                <h1 className="font-medium text-sm">0</h1>
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
          <h1 className="sm:text-2xl font-bold text-[#333] mb-4">0</h1>
          <div className="flex gap-[13px] items-center">
            <Button
              type="button"
              variant="outline"
              className="py-[14.5px] h-[unset] bg-product-button-gradient rounded px-4 w-full font-medium sm:w-[134px] flex gap-2"
              onClick={() => router.push("/view-plans")}
            >
              <BuyPlanIcon />
              Purchase
            </Button>
            <Button
              type="button"
              variant="outline"
              className="py-[14.5px] h-[unset] bg-product-button-gradient rounded px-4 w-full sm:w-[134px] font-medium flex gap-2"
            >
              <RenewIcon />
              Renew
            </Button>
            <Button
              type="button"
              variant="outline"
              className="py-[14.5px] h-[unset] bg-product-button-gradient rounded px-4 w-full sm:w-[134px] flex font-medium items-center gap-2"
            >
              <RevealSmallIcon />
              View plans
            </Button>
          </div>
        </div>
        <div className="py-6 px-4 bg-white rounded-2xl border border-[#EBEBEB] w-full sm:w-[472px]">
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
          <div className="flex gap-[13px] items-center">
            <Button
              type="button"
              variant="outline"
              className="py-[14.5px] h-[unset] bg-product-button-gradient rounded px-4 w-full font-medium sm:w-[200px] flex gap-2"
            >
              <RevealSmallIcon />
              View Beneficiaries
            </Button>
            <Button
              type="button"
              variant="outline"
              className="py-[14.5px] h-[unset] bg-product-button-gradient rounded px-4 w-full font-medium sm:w-[200px] flex gap-2"
            >
              <InviteIcon />
              Invite Beneficiaries
            </Button>
          </div>
        </div>
      </div>
    );
}

export default UserPlanCard