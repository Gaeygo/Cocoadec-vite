import React from "react";
import Logo from "../assets/Logo.svg";
import { useNavigate } from "react-router-dom";
import { useAtom } from "jotai";
import auth from "../auth/auth";
import ProfileImage from "./ui/ProfileImage";
import { supabase } from "../../supabase";

const Navbar = () => {
  const navigate = useNavigate();
  const { user } = auth;
  const [currentUser, setCurrentUser] = useAtom(user);

  const handleLogout = () => {
    supabase.auth.signOut();
  };

  return (
    <div className=" mx-[25px]   h-[80px] flex items-center justify-between font-clash text-main font-semibold text-[20px]  leading-[24.6px]   ">
      <div className="child-hover:cursor-pointer flex items-center ">
        <div
          className="mr-[96px] flex  items-center"
          onClick={() => navigate("/")}
        >
          <img className="w-[44.06px] h-[38.73px] " src={Logo} />
          <a
            role="link"
            href="/"
            aria-label="Cocoadec back to homepage"
            className="  text-[24.5px] leading-[30px] focus: outline-1 focus: outline-black "
          >
            Cocoadec{" "}
          </a>
        </div>
        <a
          href="#"
          role="link"
          aria-label="For Farmers Link to page"
          className=" hidden md:block mr-[32px] "
        >
          For Farmers
        </a>
        <a
          href="#"
          role="link"
          aria-label="For Developers Link to page"
          className="hidden md:block focus: outline-1 focus: outline-black "
        >
          For Developers
        </a>
      </div>
      {currentUser ? (
        <div className=" hidden  md:flex items-center  text-[20px]">
          <p className="hidden md:block focus: outline-1 focus: outline-black pr-3" >{currentUser.email}</p>
          <button
            className="w-[180px] h-[50px] leading-[19.68px] bg-main text-white text-[16px] rounded "
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className=" hidden  md:flex items-center  text-[20px]">
          <a
            href="/login"
            role="link"
            aria-label="Link to Sign in page"
            className="hover:cursor-pointer mr-[40px] focus: outline-1 focus: outline-black "
          >
            Sign in
          </a>
          <button
            className="w-[180px] h-[50px] leading-[19.68px] bg-main text-white text-[16px] rounded "
            onClick={() => navigate("/signup")}
          >
            create an account
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;

//https://source.boringavatars.com/
