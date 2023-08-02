import React from "react";

// icons
import { IoClose } from "react-icons/io5";
// components
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ResetPassword from "./ResetPassword";
// state
import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";
import { authModalState } from "leetcode/atoms/auth/authModalAtom";

interface AuthModalProps {
  //   isVisible: boolean;
}

const AuthModal: React.FC<AuthModalProps> = (props) => {
  const setRecoilState = useSetRecoilState(authModalState);
  const authModal = useRecoilValue(authModalState);
  const actionClick = () => {
    setRecoilState((prevState) => ({ type: "sign-in", isOpen: false }));
  };
  return (
    <>
      <div
        className="absolute top-0 left-0 w-full h-full flex items-center justify-center 
    bg-black bg-opacity-60"
      ></div>
      <div
        className="w-full sm:w-2/6 absolute top-[50%] left-[50%] translate-x-[-50%] 
    translate-y-[-50%] flex justify-center items-center"
      >
        <div className="relative w-full h-full mx-auto flex items-center justify-center">
          <div
            className="bg-white rounded-lg shadow relative w-full bg-gradient-to-b 
        from-brand-orange to-slate-900 mx-6 pb-6"
          >
            <div className="flex justify-end p-2">
              <button
                className="bg-transparent rounded-lg text-sm p-1.5 ml-auto inline-flex 
            items-center hover:bg-gray-800 hover:text-white text-white transition duration-600 ease-in-out"
                onClick={actionClick}
              >
                <IoClose className="h-5 w-5" />
              </button>
            </div>

            {authModal.type === "sign-in" && <SignIn />}
            {authModal.type === "sign-up" && <SignUp />}
            {authModal.type === "forgot-password" && <ResetPassword />}
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthModal;
