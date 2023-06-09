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
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "redux/userSlice";
import { closeLoginModal, closeSignUpModal } from "redux/modalSlice";

interface SidebarProps {
  text?: string;
  Icon: IconComponentType;
}

type IconComponentType = (props: SVGProps<SVGSVGElement>) => JSX.Element;

const Sidebar: React.FC<SidebarProps> = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state?.user);

  const handleSignOut = async () => {
    await signOut(auth);
    dispatch(signOutUser());
    dispatch(closeSignUpModal());
    dispatch(closeLoginModal());
  };

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
      <div
        onClick={handleSignOut}
        className="hover:bg-white hover:bg-opacity-10 transition duration-150 ease-in-out cursor-pointer xl:p-3 rounded-full flex items-center justify-center space-x-3 absolute bottom-0"
      >
        <img
          className="w-10 h-10 rounded-full object-cover"
          src={user?.photoUrl || "/assets/kylie.png"}
        />
        <div className="hidden xl:inline">
          <h1 className="font-bold whitespace-nowrap">{user?.name}</h1>
          <h1 className="text-gray-500">@{user?.username}</h1>
        </div>
        <DotsHorizontalIcon className="h-5 hidden xl:inline" />
      </div>
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
