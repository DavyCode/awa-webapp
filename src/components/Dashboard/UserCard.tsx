import AddCircleIcon from '@/assets/svg/add-circle.svg'

const UserCard = () => {
    return (
      <div className="w-full sm:w-[141px] flex flex-col gap-2">
        <h1 className="text-[32px] leading-[40px] font-medium text-[#1a1a1a] flex">Hi Lois</h1>
        <span className="text-grey-400 text-sm">XXXXX RSV Pin</span>
        <div className="flex items-center gap-2 cursor-pointer">
          <AddCircleIcon />
          <span className="underline text-xs text-[#244D24] font-normal">Insert RSV Pin</span>
        </div>
      </div>
    );
}

export default UserCard