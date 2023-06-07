import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import React from "react";

interface TweetInputProps {}

const TweetInput: React.FC<TweetInputProps> = () => {
  return (
    <div className="flex space-x-3 p-3 border-b border-gray-700">
      <img
        className="w-11 h-11 rounded-full object-cover"
        src="/assets/kylie.png"
      />
      <div className="w-full">
        <textarea
          className="bg-transparent resize-none outline-none w-full min-h-[50px] text-lg"
          placeholder="What's on your mind?"
        />
        <div className="flex justify-between border-t border-gray-700 pt-4">
          <div className="flex space-x-0">
            <div className="iconHover">
              <PhotographIcon className="h-[22px] text-[#1D9BF0]" />
            </div>
            <div className="iconHover">
              <ChartBarIcon className="h-[22px] text-[#1D9BF0]" />
            </div>
            <div className="iconHover">
              <EmojiHappyIcon className="h-[22px] text-[#1D9BF0]" />
            </div>
            <div className="iconHover">
              <CalendarIcon className="h-[22px] text-[#1D9BF0]" />
            </div>
            <div className="iconHover">
              <LocationMarkerIcon className="h-[22px] text-[#1D9BF0]" />
            </div>
          </div>
          <button className="bg-[#1d9bf0] rounded-full px-4 py-1.5">
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetInput;
