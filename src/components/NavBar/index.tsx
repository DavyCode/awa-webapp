"use client";

import { useRouter } from "next/navigation";
import Logo from "@/assets/svg/awabah_user_logo.svg";
import { Button } from "../ui/button";
import PlusIcon from "@/assets/svg/add.svg";
import Logout from "@/assets/svg/logout.svg";
import DashboardIcon from "@/assets/svg/element-3.svg";
import ProductIcon from "@/assets/svg/box.svg";
import UserIcon from "@/assets/svg/users.svg";
import PlansIcon from "@/assets/svg/my_plan_nav.svg";
import ClaimsIcon from "@/assets/svg/claims_nav.svg";
import AnalyticsIcon from "@/assets/svg/graph.svg";
import Link from "next/link";
import { ChangeEvent, Fragment, MouseEvent, useRef } from "react";
import gsap from "gsap";

type RouteProps = {
  path: string;
  Icon?: any;
  name: string;
  subMenu?: RouteProps[];
};

const routes: RouteProps[] = [
  {
    path: "/dashboard",
    Icon: DashboardIcon,
    name: "Dashboard",
  },

  {
    path: "/",
    Icon: ProductIcon,
    name: "Products",
    subMenu: [
      {
        name: "Valubah plans",
        path: "/products",
        subMenu: [
          {
            name: "Valubah premium",
            path: "/products?plan=premium",
          },
          {
            name: "Valubah Gold",
            path: "/products?plan=gold",
          },
          {
            name: "Valubah Flexicare",
            path: "/products?plan=others",
          },
          {
            name: "Valubah Zencare",
            path: "/products?plan=others",
          },
          {
            name: "Valubah sapphire",
            path: "/products?plan=others",
          },
          {
            name: "Valubah Platinum",
            path: "/products?plan=others",
          },
          {
            name: "Valubah Diamond",
            path: "/products?plan=others",
          },
        ],
      },
      {
        name: "Penpay",
        path: "/products/penpay",
      },
      {
        name: "Wallet",
        path: "/products/wallet",
      },
      {
        name: "Retired Savings Account",
        path: "/products/rsa",
      },
    ],
  },
  {
    path: "/teams",
    Icon: UserIcon,
    name: "Beneficiaries/Teams",
  },
  {
    path: "/plans",
    Icon: PlansIcon,
    name: "My Plans",
  },
  {
    path: "/claims",
    Icon: ClaimsIcon,
    name: "Claims",
  },
  {
    path: "/analytics",
    Icon: AnalyticsIcon,
    name: "Analytics",
  },
];

const NavBar = () => {
  const router = useRouter();

  return (
    <div className="hidden sm:inline-block w-full sm:w-[299px] shadow-[0_20px_40px_0px_rgba(223,223,223,0.25)] max-w-[299px] sticky left-0 top-0 bg-white h-screen overflow-auto">
      <div className="py-[6px] border-b border-[#EBEBEB] pl-10">
        <Button
          className="h-14 px-4 py-[10.5px]"
          onClick={() => router.push("https://awa-site.netlify.app/")}
          variant={"ghost"}
        >
          <Logo />
        </Button>
      </div>
      <nav className="pt-[14px]">
        <div className="text-center">
          <Button
            className="py-[14.5px] bg-product-button-gradient shadow-[0px_0px_0px_1px_#3D663D] w-[243px] rounded mx-auto font-medium text-base flex gap-[10px]"
            style={{
              backgroundColor: "var(--primary)",
            }}
          >
            <PlusIcon />
            <span>Add New</span>
          </Button>
        </div>
        <div className="pt-10 px-6 text-[#333]">
          <p className="text-base pb-2">Menu</p>
          <div className="flex justify-between flex-col sm:h-[778px] sm:pb-[171px]"  id="exploreNavBar">
            <ul className="list-none">
              <Menu list={routes} />
            </ul>
            <div className="bg-[#FFF2F1] text-[#EA4335] w-full cursor-pointer sm:w-[251px] py-[6px] px-2 flex justify-center items-center gap-1 rounded-[4px]">
              <Logout />
              Logout
            </div>

          </div>
        </div>
      </nav>
    </div>
  );
};

const Menu = ({ list }: { list: (typeof routes)[1][] }) => {
  const ref = useRef<HTMLUListElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const openHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const el = window.getComputedStyle(ref.current as HTMLUListElement);
    const divEl = window.getComputedStyle(divRef.current as HTMLDivElement);
    const elHeight = parseInt(el.height);
    const divHeight = parseInt(divEl.height);
    // console.log("el.height :>> ", parseInt(el.height));
    // console.log("el.divHeight :>> ", divHeight);
    // console.log(
    //   "divHeight.current scrollHeight :>> ",
    //   divRef.current?.scrollHeight,
    // );
    // console.log("ref.current scrollHeight :>> ", ref.current?.scrollHeight);
    // console.log("ref.current offsetHeight :>> ", ref.current?.offsetHeight);
    // console.log("ref.current clientHeight :>> ", ref.current?.clientHeight);
    if (divHeight) {
      //   console.log("ref.current scrollHeight :>> ", ref.current?.scrollHeight);

      gsap.to(divRef.current, { height: 0, duration: 0.25 });
      return;
    }
    gsap.to(divRef.current, {
      height: divRef.current?.scrollHeight,
      duration: 0.25,
    });
  };
  return (
    <Fragment>
      {list.map((item, i) => {
        if (item.subMenu?.length) {
          return (
            <Fragment key={i}>
              <div>
                <Button
                  className="flex gap-2 w-full p-3 justify-start text-base"
                  onClick={openHandler}
                  variant={"ghost"}
                >
                  {item.Icon ? <item.Icon /> : null}
                  <span className=" whitespace-nowrap text-ellipsis overflow-hidden font-semibold">
                    {item.name}
                  </span>
                </Button>
              </div>
              <div className="h-0 overflow-hidden" ref={divRef}>
                <ul className="ml-6 pl-2 border-l border-[#EBEBEB]" ref={ref}>
                  <Menu list={item.subMenu} />
                </ul>
              </div>
            </Fragment>
          );
        }
        return (
          <li key={i}>
            <Link href={item.path} className="flex gap-2 w-full p-3">
              {item.Icon ? <item.Icon /> : null}
              <span className=" whitespace-nowrap text-ellipsis overflow-hidden font-semibold">
                {item.name}
              </span>
            </Link>
          </li>
        );
      })}
    </Fragment>
  );
};

export default NavBar;
