import { TweetData } from "@/types/TweetData";
import {
  ChartBarIcon,
  ChatIcon,
  HeartIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import React from "react";
import Moment from "react-moment";

const Tweet = ({ data }) => {
  return (
    <div className="border-b border-gray-700">
      <TweetHeader
        username={data?.username}
        name={data?.name}
        timestamp={data?.timestamp?.toDate()}
        text={data?.tweet}
        photoUrl={data?.photoUrl}
      />
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

export const TweetHeader = ({ username, name, timestamp, text, photoUrl }) => {
  return (
    <div className="flex space-x-3 p-3 border-gray-700">
      <img
        src={photoUrl}
        className="w-11 h-11 rounded-full object-cover "
        alt=""
      />
      <div>
        <div className="flex items-center space-x-2 text-gray-500 mb-1">
          <h1 className="text-white font-bold">{name}</h1>
          <span>@{username}</span>
          <div className=" bg-gray-500 rounded-full w-1 h-1"></div>
          <Moment fromNow>{timestamp}</Moment>
        </div>
        <span>{text}</span>
      </div>
    </div>
  );
};
