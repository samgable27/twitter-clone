import React from "react";
import { SVGProps } from "react";
import {
  HomeIcon,
  HashtagIcon,
  InboxIcon,
  BookmarkIcon,
  ClipboardListIcon,
  BellIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

interface SidebarProps {
  text?: string;
  Icon: IconComponentType;
}

type IconComponentType = (props: SVGProps<SVGSVGElement>) => JSX.Element;

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <div className="h-full hidden sm:flex flex-col fixed xl:ml-24">
      <nav className="relative xl:space-y-1.5">
        <div className="flex justify-center xl:justify-start items-center py-3 xl:p-3">
          <Image
            src={"/assets/twitter-logo.png"}
            width={34}
            height={34}
            alt={""}
          />
        </div>
        <SidebarLink Icon={HomeIcon} text={"Home"} />
        <SidebarLink Icon={HashtagIcon} text={"Explore"} />
        <SidebarLink Icon={BellIcon} text={"Notifications"} />
        <SidebarLink Icon={InboxIcon} text={"Messages"} />
        <SidebarLink Icon={BookmarkIcon} text={"Bookmarks"} />
        <SidebarLink Icon={DotsCircleHorizontalIcon} text={"More"} />
        <button className="hidden xl:inline bg-[#1d9bf0] rounded-full h-[52px] mt-2 w-[200px] text-lg font-bold ">
          Tweet
        </button>
      </nav>
      <div className="absolute bottom-0">User</div>
    </div>
  );
};

const SidebarLink: React.FC<SidebarProps> = ({ text, Icon }) => {
  return (
    <li className="hoverAnimation flex mb-3 xl:justify-start justify-center items-center text-xl space-x-3">
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </li>
  );
};
export default Sidebar;
