import Header from "@/components/Header";
import Image from "next/image";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <div className="py-5 pl-4 sm:pl-[120px] shadow-auth_header_shadow">
        <Image
          src={"/awabah_logo_updated.png"}
          alt="active Users"
          sizes="80"
          width={118}
          height={45}
        />
      </div>
      <div className="pt-12 flex px-2 sm:px-20 gap-x-20 flex-col sm:flex-row relative sm:justify-center pb-[20px]">
        <div className="py-6 px-2 tab:px-[40px] flex flex-col justify-center w-full sm:max-w-[518px] relative mx-auto">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
};

export default layout;
