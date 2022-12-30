import { Avatar } from "@mui/material";
import React from "react";
import "../Post.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import { ChatBubbleOutline } from "@mui/icons-material";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

export default function Post({
  displayName,
  userName,
  verified,
  text,
  image,
  avatar,
}) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="{}" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Sam Gable{" "}
              <span className="post__headerSpecial">
                <VerifiedIcon className="post__badge" /> @sam_gable
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Obcaecati, quibusdam!
            </p>
          </div>
        </div>
        <img
          src="https://media3.giphy.com/media/65ATdpi3clAdjomZ39/giphy.gif"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutline fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}
