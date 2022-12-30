import React from "react";
import "../TweetBox.css";
import { Avatar, Button } from "@mui/material";

export default function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar />
          <input type="text" placeholder="What's happening?" />
        </div>
        <input
          type="text"
          className="tweetBox__imageInput"
          placeholder=" Optional: Enter image URL"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}
