import React from "react";
import TweetInput from "./TweetInput";
import Tweet from "./Tweet";

interface PostFeedProps {}

const PostsFeed: React.FC<PostFeedProps> = () => {
  return (
    <div className="sm:ml-16 xl:ml-80 max-w-2xl flex-grow border border-x border-gray-700">
      <div className="px-3 py-2 text-lg sm:text-xl font-bold border-b border-gray-700 sticky top-0 z-50">
        Home
      </div>
      <TweetInput />
      <Tweet />
    </div>
  );
};

export default PostsFeed;
