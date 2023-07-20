import {
  CalendarIcon,
  ChartBarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  XIcon,
} from "@heroicons/react/outline";
import { db, storage } from "../../firebase";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { openLoginModal } from "redux/modalSlice";

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
  const dispatch = useDispatch();

  const [text, setText] = useState("");
  const [image, setImage] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const filePickerRef = useRef<any>(null);

  const sendTweet = async () => {
    if (!user.username) {
      dispatch(openLoginModal());
      return;
    }

    setLoading(true);
    const docRef = await addDoc(collection(db, "posts"), {
      username: user?.username,
      name: user?.name,
      photoUrl: user?.photoUrl,
      uid: user?.uid,
      timestamp: serverTimestamp(),
      likes: [],
      tweet: text,
    });

    if (image) {
      const imageRef = ref(storage, `posts/${docRef.id}/image`);
      const uploadImage = await uploadString(imageRef, image, "data_url");
      const downloadURL = await getDownloadURL(imageRef);

      await updateDoc(doc(db, "posts", docRef.id), {
        image: downloadURL,
      });
    }

    setText("");
    setImage(null);
    setLoading(false);
  };

  const addImageToTweet = (e: any) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.addEventListener("load", (e) => {
      setImage(e.target?.result);
    });
  };

  return (
    <div className="flex space-x-3 p-3 border-b border-gray-700">
      <img
        className="w-11 h-11 rounded-full object-cover"
        src={user?.photoUrl || "/assets/twitterlogo.png"}
      />
      {loading && (
        <h1 className="text-2xl text-gray-500">Uploading post....</h1>
      )}
      {!loading && (
        <div className="w-full">
          <textarea
            onChange={(e) => setText(e.target.value)}
            value={text}
            className="bg-transparent resize-none outline-none w-full min-h-[50px] text-lg"
            placeholder="What's on your mind?"
          />

          {image && (
            <div className="mb-4 relative">
              <div
                onClick={() => setImage(null)}
                className="absolute top-1 left-1 bg-[#272c26] rounded-full w-8 h-8 flex justify-center items-center cursor-pointer hover:bg-white hover:bg-opacity-10"
              >
                <XIcon className="h-5" />
              </div>
              <img
                className="rounded-2xl max-h-80 object-contain"
                src={image}
              />
            </div>
          )}

          <div className="flex justify-between border-t border-gray-700 pt-4">
            <div className="flex space-x-0">
              <div
                className="iconHover"
                onClick={() => filePickerRef.current.click()}
              >
                <PhotographIcon className="h-[22px] text-[#1D9BF0]" />
              </div>
              <input
                className="hidden"
                type="file"
                ref={filePickerRef}
                onChange={addImageToTweet}
              />
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
              disabled={!text && !image}
              className="bg-[#1d9bf0] rounded-full px-4 py-1.5 disabled:opacity-50"
            >
              Tweet
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TweetInput;
