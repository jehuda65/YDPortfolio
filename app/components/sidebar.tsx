import Image from "next/image";
import Link from "next/link";
import {
  MdDashboard,
  MdOutlineKeyboardArrowRight,
  MdKeyboardArrowLeft,
} from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { BsPeople } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { TiContacts } from "react-icons/ti";
import { useContext, useState } from "react";
import { SidebarContext } from "./sidebarContext";

const sidebarItems = [
  {
    name: "Home",
    href: "/",
    icon: AiOutlineHome,
  },
  {
    name: "About",
    href: "/",
    icon: BsPeople,
  },
  {
    name: "Mails",
    href: "/",
    icon: FiMail,
  },
  {
    name: "Contact",
    href: "/",
    icon: TiContacts,
  },
];

export default function Sidebar() {
  const { isSidebarCollapsed, toggleSidebarCollapseHandler } =
    useContext(SidebarContext);

  return (
    <div className="sidebar_wrapper ">
      <button
        onClick={toggleSidebarCollapseHandler}
        className={`btn fixed z-[201] right-[17rem] md:top-[5.3rem]  bg-amber-400 h-8 w-8 md:w-6 md:h-6 border border-[#cdca9a] rounded-[50%] flex justify-center items-center cursor-none hover:bg-yellow-700 duration-300 translate-x-[50%] text-2xl md:text-lg 
        ${
          isSidebarCollapsed
            ? "right-[2rem]  md:right-[5.3rem] top-[2.5rem] "
            : "top-[5rem]"
        } `}
      >
        {isSidebarCollapsed ? (
          <MdKeyboardArrowLeft />
        ) : (
          <MdOutlineKeyboardArrowRight />
        )}
      </button>
      <aside
        data-collapse={isSidebarCollapsed}
        className={` sidebar fixed right-0 z-[200]  h-full bg-gradient-to-l from-[#000]/50 backdrop-blur-sm p-4 transition-all duration-300 ${
          isSidebarCollapsed ? "hidden md:block w-[5.3rem]" : "w-[17rem]"
        }`}
      >
        <div className="sidebar_top w-max flex items-center gap-4 pb-4 mb-4 border-b-1 border-amber-400">
          <Image
            src="/favicon.ico"
            alt="blabl"
            width={40}
            height={10}
            className="sidebar__logo w-[3.4rem] h-[3.5rem] object-cover rounded-[1rem] border-2 border-pink-600 p-2"
          />
          <p
            className={`${
              isSidebarCollapsed
                ? "hidden"
                : "sidebar_logoName text-amber-300 text-[1.2rem] font-[600]"
            }`}
          >
            Yehudah
          </p>
        </div>
        <hr className="pb-5 border-zinc-500 -translate-y-2" />
        <ul className="sidebar__list list-none">
          {sidebarItems.map(({ name, href, icon: Icon }) => (
            <li className="sidebar__item" key={name}>
              <Link
                href={href}
                className="sidebar__link cursor-none inline-block text-[1rem] text-black px-[0.8rem] py-4 w-full bg-[#f3f4f6] hover:bg-zinc-800 hover:bg-opacity-45 duration-300 hover:text-amber-400 border-2 border-amber-400 mb-4 rounded-[0.8rem]"
              >
                <span className="sidebar_icon text-[1.2rem] inline-block">
                  <Icon />
                </span>
                <span
                  className={`${
                    isSidebarCollapsed ? "hidden" : "sidebar_name ml-[0.5rem]"
                  }  `}
                >
                  {name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
