import CloseIcon from "@/assets/svg/close-circle.svg";
import Logo from "@/assets/svg/awabah_user_logo.svg";

const EnrolHeader = () => {
  const onClose = () => {};

  return (
    <div className="flex justify-between">
      <div className="w-[99px] h-[149px] bg-[#294229] sm:ml-[35px]"></div>
      <div className="flex flex-col justify-center items-center w-full sm:w-[254px]">
        <Logo />
        <h1 className="mt-[22.06px] text-2xl font-bold text-[#333]">
          Micropension form
        </h1>
        <p className="text-base text-[#666] mt-2">Customer Care line: 07086209827</p>
      </div>
      {/* close button */}
      <div className="mb-1 flex justify-end cursor-pointer pr-4" onClick={onClose}>
        <div className="w-6 h-6 rounded-full bg-white flex justify-end items-center">
          <CloseIcon />
        </div>
      </div>
    </div>
  );
};

export default EnrolHeader;
