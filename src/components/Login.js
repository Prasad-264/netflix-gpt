import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_IMG } from "../utils/constants"

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleAuthClick = () => {
    const errmessage = isSignIn
      ? checkValidation(email.current.value, password.current.value)
      : checkValidation(
          email.current.value,
          password.current.value,
          name.current.value
        );
    setErrorMessage(errmessage);
    if (errmessage) return;
    if (!isSignIn) {
      // Signed up
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // log in
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInClick = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute bg-black">
        <img
          src={BG_IMG}
          alt="bg logo"
          className="opacity-60"
        />
      </div>
      <form
        className="absolute w-3/12 mx-auto p-12 my-36 right-0 left-0 text-white bg-black bg-opacity-70 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full name"
            ref={name}
            className="w-full my-3 p-2 bg-slate-600 bg-opacity-70 rounded-sm"
          />
        )}
        <input
          type="text"
          placeholder="Email or mobile number"
          ref={email}
          className="w-full my-3 p-2 bg-slate-600 bg-opacity-70 rounded-sm"
        />
        <input
          type="password"
          placeholder="Password"
          ref={password}
          className="w-full my-3 p-2 bg-slate-600 bg-opacity-70 rounded-sm"
        />
        {errorMessage && (
          <p className="text-red-600 my-2 font-bold text-md">{errorMessage}</p>
        )}
        <button
          className="w-full my-3 p-2 bg-red-700 rounded-md font-semibold"
          onClick={handleAuthClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 cursor-pointer" onClick={toggleSignInClick}>
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Allready register? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
