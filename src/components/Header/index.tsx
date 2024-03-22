import Image from "next/image";
import ArrowCircleLeft from "@/assets/icons/ArrowCircleLeft";
import Link from "next/link";

interface IProp {
  isVisible?: boolean;
}

const Header: React.FC<IProp> = ({}) => {
  return (
    <div>
      <div className="mb-[80px] lg:mb-2 lg:absolute top-0 xl:-translate-x-[calc(100%+24px+120px)] lg:-translate-x-[calc(100%+70px)]">
        <Link
          href="https://awa-site.netlify.app
"
        >
          <div className="flex items-center gap-x-2 mb-5 text-[#3D663D]">
            <ArrowCircleLeft />
            Go back
          </div>
        </Link>

        <div className="inline-flex gap-x-4 items-center justify-center min-w-[auto]">
          <Image
            src={"/users.png"}
            alt="active Users"
            sizes="80"
            width={118}
            height={45}
          />
          <div className="flex flex-col min-w-[auto]">
            <p className="font-bold text-[#1a1a1a] text-[20.5px] leading-[30px]">
              50k+
            </p>
            <p className="text-[10.28px] leading-[15.42px] whitespace-nowrap">
              Happy Customers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

/*
<Link
  href="https://awa-site.netlify.app
"
>
  <div className="flex items-center gap-x-2 mb-5 text-[#3D663D]">
    <ArrowCircleLeft />
    Go back
  </div>
</Link>; */
