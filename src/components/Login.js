import React, { useRef, useState } from "react";
import Header from "./Header";
import { loginFormValidation } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [checkSignIn, setcheckSignIn] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const signInToggle = () => {
    setcheckSignIn(!checkSignIn);
  };

  const validate = () => {
    const message = loginFormValidation(
      email.current.value,
      password.current.value
    );
    seterrorMessage(message);
    if (message) return;

    if (!checkSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + errorMessage);
          // ..
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            name: name.current,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              // Profile updated!
              // ...
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrorMessage(errorCode + errorMessage + "hello world");
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="w-full pt-40 bg-[url(https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg)] h-screen">
        <div className=" bg-black text-white w-[450px] h-4/5 mx-auto py-10 px-16">
          <span className="font-bold text-2xl">
            {checkSignIn ? "Sign In" : "Sign Up"}
          </span>
          <form onSubmit={(e) => e.preventDefault()} className="my-6">
            {!checkSignIn && (
              <input
                type="text"
                ref={name}
                placeholder="Full Name"
                className="mb-3 px-2 py-3 bg-black border-[1px] border-gray-500 w-full"
              />
            )}
            <input
              type="text"
              ref={email}
              placeholder="Email or Phone number"
              className="px-2 py-3 bg-black border-[1px] border-gray-500 w-full"
            />
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className=" my-3 px-2 py-3 bg-black border-[1px] border-gray-500 w-full"
            />
            <p className="mt-3 text-red-500 text-sm">{errorMessage}</p>
            <button
              onClick={validate}
              className="w-full bg-red-600 py-3 rounded text-white font-semibold"
            >
              {checkSignIn ? "Sign In" : "Sign Up"}{" "}
            </button>
          </form>
          <p className="text-sm text-gray-400">
            {checkSignIn ? "New to Netflix," : "Already registered? "}{" "}
            <span
              onClick={signInToggle}
              className="text-white font-bold cursor-pointer"
            >
              {checkSignIn ? "Sign Up" : "Sign In"}
            </span>{" "}
            now
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
