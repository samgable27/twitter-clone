import React from "react";
import { Modal } from "@mui/material/";
import { useDispatch, useSelector } from "react-redux";
import { closeLoginModal, openLoginModal } from "redux/modalSlice";

interface LoginModalProps {}

const Login: React.FC<LoginModalProps> = () => {
  const isOpen = useSelector((state: any) => state?.modals?.loginModalOpen);
  const dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => dispatch(openLoginModal())}
        className="font-bold transition duration-150 ease-in-out bg-white border hover:bg-[#cbd2d7] text-black rounded-full w-[160px] h-[40px]"
      >
        Log In
      </button>
      <Modal
        className="flex justify-center items-center"
        open={isOpen}
        onClose={() => dispatch(closeLoginModal())}
      >
        <div className="flex justify-center w-[90%] h-[600px] border border-gray-700 rounded-lg bg-black text-white  md:w-[560px] md:h-[600px]">
          <div className="w-[90%] mt-8 flex flex-col">
            <h1 className="text-center mt-4 font-bold text-4xl">
              Log In to your account
            </h1>

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
              Log In
            </button>
            <h1 className="text-center mt-8 font-bold text-lg">or</h1>
            <button className="bg-white text-black w-full font-bold text-lg p-2 rounded-md mt-8">
              Log In as Guest
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Login;
