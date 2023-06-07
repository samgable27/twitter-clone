import React, { useState } from "react";
import { Modal } from "@mui/material/";
import { useDispatch, useSelector } from "react-redux";
import { closeSignUpModal, openSignUpModal } from "redux/modalSlice";

interface SignUpModalProps {}

const SignUp: React.FC<SignUpModalProps> = () => {
  const isOpen = useSelector((state: any) => state?.modals?.signUpModalOpen);
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => dispatch(openSignUpModal())}
        className="font-bold transition duration-150 ease-in-out bg-white border hover:bg-[#cbd2d7] text-black rounded-full w-[160px] h-[40px]"
      >
        Sign Up
      </button>
      <Modal
        className="flex justify-center items-center"
        open={isOpen}
        onClose={() => dispatch(closeSignUpModal())}
      >
        <div className="flex justify-center w-[90%] h-[600px] border border-gray-700 rounded-lg bg-black text-white  md:w-[560px] md:h-[600px]">
          <div className="w-[90%] mt-8 flex flex-col">
            <button className="bg-white text-black w-full font-bold text-lg p-2 rounded-md">
              Sign In as Guest
            </button>
            <h1 className="text-center mt-4 font-bold text-lg">or</h1>
            <h1 className="text-center mt-4 font-bold text-4xl">
              Create your Account
            </h1>
            <input
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              placeholder="Full Name"
              type={"text"}
            />
            <input
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              placeholder="Email"
              type={"email"}
            />
            <input
              className="h-10 mt-8 rounded-md bg-transparent border border-gray-700 p-6"
              placeholder="Password"
              type={"password"}
            />
            <button className="bg-white text-black w-full font-bold text-lg p-2 mt-8 rounded-md">
              Create Account
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SignUp;
