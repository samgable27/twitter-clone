import {
  ChartBarIcon,
  ChatIcon,
  HeartIcon,
  TrashIcon,
  UploadIcon,
} from "@heroicons/react/outline";
import { HeartIcon as FilledHeartIcon } from "@heroicons/react/solid";
import React, { useEffect, useState } from "react";
import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import {
  openCommentModal,
  openLoginModal,
  setCommentTweet,
} from "../../redux/modalSlice";
import { useRouter } from "next/router";
import {
  arrayRemove,
  arrayUnion,
  deleteDoc,
  doc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase";

const Tweet = ({ data, id }) => {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user);

  const [likes, setLikes] = useState([]);
  const [comments, setComments] = useState([]);

  const likeComment = async (e) => {
    e.stopPropagation();

    if (!user.username) {
      dispatch(openLoginModal());
      return;
    }

    if (likes.includes(user.uid)) {
      await updateDoc(doc(db, "posts", id), {
        likes: arrayRemove(user.uid),
      });
    } else {
      await updateDoc(doc(db, "posts", id), {
        likes: arrayUnion(user.uid),
      });
    }
  };

  const deleteTweet = async (e) => {
    e.stopPropagation();
    await deleteDoc(doc(db, "posts", id));
  };

  useEffect(() => {
    if (!id) return;

    const unsubscribe = onSnapshot(doc(db, "posts", id), (doc) => {
      setLikes(doc.data()?.likes);
      setComments(doc.data()?.comments);
    });

    return unsubscribe;
  }, []);

  return (
    <div
      onClick={() => router.push("/" + id)}
      className="border-b border-gray-700 cursor-pointer"
    >
      <TweetHeader
        username={data?.username}
        name={data?.name}
        timestamp={data?.timestamp?.toDate()}
        text={data?.tweet}
        photoUrl={data?.photoUrl}
        image={data?.image}
      />
      <div className="p-3 ml-16 text-gray-500 flex space-x-14">
        <div
          className="flex justify-center items-center space-x-2"
          onClick={(e) => {
            e.stopPropagation();
            if (!user.username) {
              dispatch(openLoginModal());
              return;
            }
            dispatch(
              setCommentTweet({
                id: id,
                photoUrl: data.photoUrl,
                name: data.name,
                username: data.username,
                tweet: data.tweet,
              })
            );
            dispatch(openCommentModal());
          }}
        >
          <ChatIcon className="w-5 cursor-pointer hover:text-pink-500" />
          {comments?.length > 0 && <span>{comments?.length}</span>}
        </div>
        <div
          className="flex justify-center items-center space-x-2"
          onClick={likeComment}
        >
          {likes.includes(user.uid) ? (
            <FilledHeartIcon className="w-5 text-pink-500" />
          ) : (
            <HeartIcon className="w-5 cursor-pointer hover:text-pink-500" />
          )}
          {likes.length > 0 && <span>{likes.length}</span>}
        </div>
        {user.uid === data?.uid && (
          <div
            onClick={deleteTweet}
            className="cursor-pointer hover:text-red-600"
          >
            <TrashIcon className="w-5" />
          </div>
        )}
        <ChartBarIcon className="w-5 cursor-not-allowed" />
        <UploadIcon className="w-5 cursor-not-allowed" />
      </div>
    </div>
  );
};

export default Tweet;

export const TweetHeader = ({
  username,
  name,
  timestamp,
  text,
  photoUrl,
  image,
}) => {
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
        {image && (
          <img
            className="object-cover rounded-md mt-3 max-h-80 border border-gray-700"
            src={image}
          />
        )}
      </div>
    </div>
  );
};
