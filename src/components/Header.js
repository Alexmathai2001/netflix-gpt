import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { GIT_PROFILE_PHOTO, NETFLIX_LOGO } from "../utils/constants";
import { toggleGptSearchView } from "../utils/GptSlice";
import { supported_languages } from "../utils/lang";
import {changelang} from "../utils/configSlice"

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const gptselector = useSelector((store) => store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when the component unmounts
    return () => unsubscribe();
  }, []);

  const handleSearchToggle = () => {
    dispatch(toggleGptSearchView())
  }

  const handleLangChange = (e) => {
    dispatch(changelang(e.target.value))
  }

  return (
    <div className=" z-10 absolute px-32 bg-gradient-to-b from-black w-full flex justify-between items-center">
      <img src={NETFLIX_LOGO} alt="logo" className="w-44" />
      {user && (
        <div className="flex">
          { gptselector && <select onChange={handleLangChange} className="font-extrabold bg-black  text-white">
            {supported_languages.map((lang) => <option value={lang.code} key={lang.code} className="bg-gray-50 rounded-md text-black">{lang.code}</option>)}
          </select>}
          <button className="bg-gray-300 hover:bg-gray-400 font-semibold px-6 py-0 mx-4 rounded-lg" onClick={handleSearchToggle}>
            {gptselector ? "Home Page" : "GPT Search"}
          </button>
          <img src={GIT_PROFILE_PHOTO} className="h-10 w-10 rounded-full" />

          <button
            onClick={handleSignOut}
            className="ms-5 font-bold text-white py-1 px-2 rounded-lg bg-red-500 h-10"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
