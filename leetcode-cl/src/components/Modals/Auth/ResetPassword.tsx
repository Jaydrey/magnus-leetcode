import React from "react";

interface ResetPasswordProps {}

const ResetPassword: React.FC<ResetPasswordProps> = () => {
  return (
    <div className="flex flex-col justify-center w-full">
      <div className="px-6 py-1 w-full">
        <span className="block text-white font-semibold text-xl">
          Reset Password
        </span>
      </div>
      <div className="w-full flex flex-col items-center px-6 py-3">
        <p className="text-white">
          Forgotten your password? Enter your e-mail address below, and
          we&apos;ll send you an e-mail allowing you to reset it.
        </p>
        <form className="w-full mt-6">
          <div className="w-full flex justify-center flex-col">
            <label htmlFor="email" className="text-dark-label-2 text-sm block">
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-gray-600 px-3 py-2 w-full rounded-md text-l text-white mt-3"
              placeholder="johndoe@gmail.com"
            />
          </div>
          <div className="w-full flex justify-center flex-col mt-6">
            <button
              type="submit"
              className="bg-brand-orange w-full py-2 text-sm rounded-md 
          text-white hover:bg-brand-orange-s transition duration-600 ease-in-out"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
