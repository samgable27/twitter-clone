import {
  ChartBarIcon,
  ChatIcon,
  HeartIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import React from "react";

interface TweetProps {}

const Tweet: React.FC<TweetProps> = () => {
  return (
    <div className="border-b border-gray-700">
      <TweetHeader />
      <div className="p-3 ml-16 text-gray-500 flex space-x-14">
        <ChatIcon className="w-5 cursor-pointer hover:text-pink-500" />
        <HeartIcon className="w-5 cursor-pointer hover:text-pink-500" />
        <ChartBarIcon className="w-5 cursor-not-allowed" />
        <UploadIcon className="w-5 cursor-not-allowed" />
      </div>
    </div>
  );
};

export default Tweet;

export const TweetHeader: React.FC<TweetProps> = () => {
  return (
    <div className="flex space-x-3 p-3 border-gray-700">
      <img
        src="/assets/kylie.png"
        className="w-11 h-11 rounded-full object-cover "
        alt=""
      />
      <div>
        <div className="flex items-center space-x-2 text-gray-500 mb-1">
          <span>@kylie</span>
          <div className=" bg-gray-500 rounded-full w-1 h-1"></div>
          <span>2 hours ago</span>
        </div>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus, dicta.
        </span>
      </div>
    </div>
  );
};
