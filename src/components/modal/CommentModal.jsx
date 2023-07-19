import { Modal } from "@mui/material/";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeCommentModal } from "../../../redux/modalSlice";

const CommentModal = () => {
  const isOpen = useSelector((state) => state.modals.commentModalOpen);
  const dispatch = useDispatch();
  return (
    <>
      <Modal open={isOpen} onClose={() => dispatch(closeCommentModal())}>
        <div className="w-[500px] h-[500px]">This is the comment modal</div>
      </Modal>
    </>
  );
};

export default CommentModal;
