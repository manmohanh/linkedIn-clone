import React from "react";
import { Link } from "react-router-dom";
import GoogleLoginComponent from "../../components/google-login/google-login";

const Login = () => {
  return (
    <div className="w-full flex h-[81%] flex-col items-center">
      <div className="w-[85%] md:w-[28%] shadow-xl rounded-sm p-10">
        <div className="text-3xl">Sign In</div>
        <div className="my-5">
            <GoogleLoginComponent/>
        </div>

        <div className="flex items-center gap-2">
          <div className="border-b-1 border-gray-400 w-[45%]"></div>
          <div>or</div>
          <div className="border-b-1 border-gray-400 w-[45%] my-6"></div>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              className="w-full text-xl border-2 rounded-lg px-5 py-1"
              placeholder="Email"
            />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="w-full text-xl border-2 rounded-lg px-5 py-1"
              placeholder="Password"
            />
          </div>

          <div className="w-full bg-blue-800 hover:bg-blue-900 text-white py-3 px-4 rounded-xl text-center text-xl cursor-pointer my-2">
            Sign In
          </div>
        </div>
      </div>

      <div className="mt-4 mb-10">
        New to LinkedIn?{" "}
        <Link to={"/signup"}>
          <span className="text-blue-800 cursor-pointer">Join now</span>
        </Link>
      </div>
    </div>
  );
};

export default Login;
