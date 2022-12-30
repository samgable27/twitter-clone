import React from "react";
import "../Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";

export default function Feed() {
  return (
    <div className="feed">
      {/* HEADER */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />

      <Post
        displayName="Sam Gable"
        username="fullthrottledvb"
        verified={true}
      />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
