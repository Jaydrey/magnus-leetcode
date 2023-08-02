import Link from "next/link";
import React from "react";

// state
import { useSetRecoilState } from "recoil";
import { authModalState } from "leetcode/atoms/auth/authModalAtom";

interface SignUpProps {}

const SignUp: React.FC<SignUpProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);

  const actionLogIn = () => {
    setAuthModalState((prevState) => ({
      isOpen: true,
      type: "sign-in",
    }));
  };
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="px-6 py-1 w-full">
        <span className="block text-white font-semibold text-xl">
          Sign up to LeetClone
        </span>
      </div>
      <form className="mt-4 px-6 py-2 w-full flex flex-col items-center">
        <div className="w-full">
          <label htmlFor="email" className="text-dark-label-2 text-sm block">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-600 px-3 py-2 w-full rounded-md text-l text-white mt-3"
            placeholder="johndoe@gmail.com"
          />
        </div>
        <div className="w-full mt-4">
          <label htmlFor="email" className="text-dark-label-2 text-sm block">
            Name
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-600 px-3 py-2 w-full rounded-md text-l text-white mt-3"
            placeholder="John Doe"
          />
        </div>
        <div className="w-full mt-4">
          <label htmlFor="password" className="text-dark-label-2 text-sm block">
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            className="bg-gray-600 px-3 py-2 w-full rounded-md text-l text-white mt-3 
            placeholder:text-3xl placeholder:space-x-3 flex items-center"
            placeholder="......."
          />
        </div>
        <div className="mt-5 w-full">
          <button
            type="submit"
            className="bg-brand-orange w-full py-2 text-sm rounded-md 
          text-white hover:bg-brand-orange-s transition duration-600 ease-in-out"
          >
            Register
          </button>
        </div>
        <div className="w-full flex mt-5">
          <p>
            <span className="text-white">Already have an account? </span>
            <Link
              href="#"
              className="text-brand-orange text-sm hover:underline inline"
              onClick={actionLogIn}
            >
              Log In
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
