import Sidebar from "@/components/Sidebar";
import { Inter } from "@next/font/google";
import { SVGProps } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-black min-h-screen max-w-[1400px] mx-auto text-[#E7E9EA]">
      <Sidebar
        Icon={function (props: SVGProps<SVGSVGElement>): JSX.Element {
          throw new Error("Function not implemented.");
        }}
      />
    </div>
  );
}
