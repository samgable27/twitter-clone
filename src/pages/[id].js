import React from "react";
import Sidebar from "../components/Sidebar";
import PostsFeed from "../components/PostsFeed";
import Trending from "../components/Trending";
import Tweet from "../components/Tweet";
import { ArrowLeftIcon } from "@heroicons/react/outline";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Moment from "react-moment";
import Link from "next/link";
import { useSelector } from "react-redux";

export async function getServerSideProps(context) {
  const id = context.query.id;
  const docRef = doc(db, "posts", id);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  const formattedData = {
    username: data.username,
    name: data.name,
    photoUrl: data.photoUrl,
    text: data.tweet,
    comments: data.comments || null,
    timestamp: JSON.stringify(data.timestamp.toDate()),
    image: data.image || null,
  };
  return {
    props: {
      tweetData: formattedData,
    },
  };
}

const commentsPage = ({ tweetData }) => {
  const user = useSelector((state) => state.user);
  return (
    <div>
      <div className="bg-black min-h-screen max-w-[1400px] mx-auto flex text-[#E7E9EA]">
        <Sidebar />
        <div className="sm:ml-16 xl:ml-[350px] max-w-2xl flex-grow border-gray-700 border-x">
          <div className="flex space-x-2 px-3 py-2 text-lg sm:text-xl font-bold border-b border-gray-700 sticky top-0 z-50">
            <Link href={"/"}>
              <ArrowLeftIcon className="w-7 cursor-pointer" />
            </Link>
            <h1>Tweet</h1>
          </div>

          <div className="border-b border-gray-700">
            <div className="flex space-x-3 p-3 border-gray-700">
              <img
                src={tweetData.photoUrl}
                className="w-11 h-11 rounded-full object-cover "
                alt=""
              />
              <div>
                <div className="flex items-center space-x-2 text-gray-500 mb-1">
                  <h1 className="text-white font-bold">{tweetData.name}</h1>
                  <span>@{tweetData.username}</span>
                  <div className=" bg-gray-500 rounded-full w-1 h-1"></div>
                  <Moment fromNow>{JSON.parse(tweetData.timestamp)}</Moment>
                </div>
                <span className="text-2xl">{tweetData.text}</span>

                {tweetData.image && (
                  <img
                    className="object-cover rounded-md mt-3 max-h-80 border border-gray-700"
                    src={tweetData.image}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center p-2 border-b border-gray-700">
            <div className="flex justify-center items-center p-1 space-x-2">
              <img className="w-12 h-12 rounded-full" src={user.photoUrl} />
              <h1 className="text-2xl text-gray-500">Tweet your reply</h1>
            </div>

            <button
              disabled={true}
              className="bg-[#1d9bf0] rounded-full px-4 py-1.5 disabled:opacity-50"
            >
              Tweet
            </button>
          </div>

          {tweetData.comments?.map((comment) => (
            <div className="border-b border-gray-700">
              <div className="flex space-x-3 p-3 border-gray-700">
                <img
                  src={comment.photoUrl}
                  className="w-11 h-11 rounded-full object-cover "
                  alt=""
                />
                <div>
                  <div className="flex items-center space-x-2 text-gray-500 mb-1">
                    <h1 className="text-white font-bold">{comment.name}</h1>
                    <span>@{comment.username}</span>
                    <div className=" bg-gray-500 rounded-full w-1 h-1"></div>
                    <Moment fromNow>{comment.timestamp}</Moment>
                  </div>
                  <span>{comment.comment}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Trending />
      </div>
    </div>
  );
};

export default commentsPage;
