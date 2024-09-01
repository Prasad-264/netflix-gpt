import { useState } from "react";
import Header from "./Header";

const Login = () => {
	const [isSignIn, setIsSignIn] = useState(true);
	const toggleSignInClick = () => {
		setIsSignIn(!isSignIn);
	}
  return (
    <div>
      <Header />
      <div className="absolute bg-black">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_small.jpg"
          alt="bg logo"
          className="opacity-60"
        />
      </div>
      <form className="absolute w-3/12 mx-auto p-12 my-36 right-0 left-0 text-white bg-black bg-opacity-70 rounded-md">
        <h1 className="font-bold text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
				{!isSignIn && (<input
          type="text"
          placeholder="Full name"
          className="w-full my-2 p-2 bg-slate-600 bg-opacity-70 rounded-sm"
        />
				)}
        <input
          type="text"
          placeholder="Email or mobile number"
          className="w-full my-2 p-2 bg-slate-600 bg-opacity-70 rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full my-2 p-2 bg-slate-600 bg-opacity-70 rounded-sm"
        />
        <button className="w-full my-2 p-2 bg-red-700 rounded-md font-semibold">
					{isSignIn ? "Sign In" : "Sign Up"}
        </button>
				<p className="py-2 cursor-pointer" onClick={toggleSignInClick}>
					{isSignIn ? "New to Netflix? Sign up now." : "Allready register? Sign in now"}
				</p>
      </form>
    </div>
  );
};

export default Login;
