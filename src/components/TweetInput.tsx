import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { useSelector } from "react-redux";

interface TweetInputProps {
  username?: string;
  name?: string;
  photoUrl?: string;
  uid?: string;
  likes?: string[];
  tweet?: string;
}

const TweetInput: React.FC<TweetInputProps> = () => {
  const user = useSelector((state: any) => state?.user);

  const [text, setText] = useState("");

  const sendTweet = async () => {
    const docRef = await addDoc(collection(db, "posts"), {
      username: user?.username,
      name: user?.name,
      photoUrl: user?.photoUrl,
      uid: user?.uid,
      timestamp: serverTimestamp(),
      likes: [],
      tweet: text,
    });

    setText("");
  };

  return (
    <div className="flex space-x-3 p-3 border-b border-gray-700">
      <img
        className="w-11 h-11 rounded-full object-cover"
        src="/assets/kylie.png"
      />
      <div className="w-full">
        <textarea
          onChange={(e) => setText(e.target.value)}
          value={text}
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
          <button
            onClick={sendTweet}
            disabled={!text}
            className="bg-[#1d9bf0] rounded-full px-4 py-1.5 disabled:opacity-50"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
};

export default TweetInput;
