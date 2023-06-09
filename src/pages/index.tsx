import Banner from "@/components/Banner";
import PostsFeed from "@/components/PostsFeed";
import Sidebar from "@/components/Sidebar";
import Trending from "@/components/Trending";
import TweetInput from "@/components/TweetInput";
import { Inter } from "@next/font/google";
import { SVGProps } from "react";
import { useSelector } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const userName = useSelector((state: any) => state?.user?.username);

  console.log(userName);

  return (
    <div>
      <div className="bg-black min-h-screen max-w-[1400px] mx-auto flex text-[#E7E9EA]">
        <Sidebar
          Icon={function (props: SVGProps<SVGSVGElement>): JSX.Element {
            throw new Error("Function not implemented.");
          }}
        />
        <PostsFeed />
        <Trending />
      </div>
      {!userName && <Banner />}
    </div>
  );
}
