import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  signUpModalOpen: boolean;
  loginModalOpen: boolean;
  commentModalOpen: boolean;
  commentTweetDetails: {
    id: string | null;
    photoUrl: string | null;
    name: string | null;
    username: string | null;
    tweet: string | null;
  };
}

const initialState: ModalState = {
  signUpModalOpen: false,
  loginModalOpen: false,
  commentModalOpen: false,
  commentTweetDetails: {
    id: null,
    photoUrl: null,
    name: null,
    username: null,
    tweet: null,
  },
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openSignUpModal: (state) => {
      state.signUpModalOpen = true;
    },
    closeSignUpModal: (state) => {
      state.signUpModalOpen = false;
    },
    openLoginModal: (state) => {
      state.loginModalOpen = true;
    },
    closeLoginModal: (state) => {
      state.loginModalOpen = false;
    },
    openCommentModal: (state) => {
      state.commentModalOpen = true;
    },
    closeCommentModal: (state) => {
      state.commentModalOpen = false;
    },
    setCommentTweet: (state, action) => {
      state.commentTweetDetails.username = action.payload.username;
      state.commentTweetDetails.name = action.payload.name;
      state.commentTweetDetails.id = action.payload.id;
      state.commentTweetDetails.photoUrl = action.payload.photoUrl;
      state.commentTweetDetails.tweet = action.payload.tweet;
    },
  },
});

export const {
  openSignUpModal,
  closeSignUpModal,
  openLoginModal,
  closeLoginModal,
  openCommentModal,
  closeCommentModal,
  setCommentTweet,
} = modalSlice.actions;

export default modalSlice.reducer;
