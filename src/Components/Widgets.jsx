import React from "react";
import "../Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

export default function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"858551177860055040"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="fullthrottledvb"
          options={{ height: 400 }}
        />

        <TwitterShareButton
          url="https://www.facebook.com/fullthrottledub/"
          options={{ text: "reactJs is awesome", via: "fullthrottledvb" }}
        />
      </div>
    </div>
  );
}
