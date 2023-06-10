import React from "react";
import { logo, Vector, profile } from "../assets";

const Nav = () => {
  return (
    <nav className=" flex w-full justify-between mt-16">
      <div className="">
        <img src={logo} alt="" className="h-[45px] w-[160] md:ml-[74px] " />
      </div>
      <div className="class">
        <button className="lg:hidden flex justify-start bg-primary font-poppins text-white px-[25px] py-3 rounded-xl mr-4">
          ProfileName
          <span className="class">
            <img src={Vector} alt="svg" className="mt-2 ml-3" />
          </span>
        </button>
        <ul className=" hidden sm:flex  flex-row space-x-8 font-semibold font-poppins text-primary mr-20">
          <li className="opacity-25">My Assignment</li>
          <li className="opacity-25">Chat with Mentor</li>
          <li className="flex flex-row">
            <img src={profile} alt="svg" className=" h-[20px] w-[20px] mt-1" />
            <span className=" ml-1">ProfileName</span>
            <img src={Vector} alt="vector" className="h-[20px] w-[20px]" />
          </li>
        </ul>
      </div>
      <div className="hidden">
        <img src={logo} alt="" className="h-[45px] w-[160] " />
      </div>
    </nav>
  );
};

export default Nav;
