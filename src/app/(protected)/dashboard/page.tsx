import Dashboard from "@/components/Dashboard";
import ChatMessageIcon from "@/assets/svg/chat-message-icon.svg";


const page = () => {
  return (
    <div className="relative">
      <Dashboard />
      <div className="w-10 h-10 rounded-full z-40 bg-[#f1f1f1] flex justify-center items-center  right-4 bottom-14 fixed">
        <ChatMessageIcon />
      </div>
    </div>
  );
};

export default page;
