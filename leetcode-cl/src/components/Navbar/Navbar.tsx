import React from "react";
import Link from "next/link";
import Image from "next/image";

// state import
import { useSetRecoilState } from "recoil";
import { authModalState } from "leetcode/atoms/auth/authModalAtom";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const setAuthModalState = useSetRecoilState(authModalState);
  const actionClick = () => {
    setAuthModalState((prevState) => ({ ...prevState, isOpen: true }));
  };
  return (
    <div className="flex items-center justify-between sm:px-12 px-2 md:px-24">
      <Link href="/" className="flex items-center justify-center h-20">
        <img src="/logo.png" alt="LeetCode image" className="h-full" />
      </Link>
      <div className="flex items-center justify-center">
        <button
          className="bg-brand-orange rounded-md text-white px-2 py-1 sm:px-4
         text-sm font-medium hover:text-brand-orange hover:bg-white hover:border-brand-orange hover:border-2
         border-transparent transition duration-300 ease-in-out"
          onClick={actionClick}
        >
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Navbar;
