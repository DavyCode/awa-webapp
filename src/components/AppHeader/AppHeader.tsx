import { Button } from "../ui/button";

const AppHeader = () => {
  return (
    <div className="bg-[#336F0A] py-[10px] justify-center flex">
      <div className="flex items-center gap-6">
        <div className="text-white">Welcome! Check out our latest news</div>
        <Button className=" text-sm leading-normal" variant={"secondary"}>
          Learn more
        </Button>
      </div>
    </div>
  );
};

export default AppHeader;
