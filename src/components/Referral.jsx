import React from "react";
import Card from './Card.jsx'
import Code from "./Code.jsx";

const Referral = () => {
  return (
    <div className="class"><div className="container mx-auto px-4 ">
      {/* for desktop*/}
      <div className="hidden lg:block">
      <div className="relative flex grow mt-[60px] ml-[140px] h-[76px] font-poppins text-sm font-normal leading-6 tracking-normal text-left">
      <p className="text-sm">
        <a href="/" className="">
          UI/UX
        </a>{" "}
        &gt;{" "}
        <a href="/" className="">
          Refer &amp; Earn
        </a>
      </p>
      </div>
      </div>
      {/*For Mobile*/}
      <div className="lg:hidden">
      <div className="relative flex mt-14 ml-4  font-poppins text-sm font-normal leading-6  ">
      <p className="text-sm">
        <a href="/" className="">
          UI/UX
        </a>{" "}
        &gt;{" "}
        <a href="/" className="">
          Refer &amp; Earn
        </a>
      </p></div>
      </div>
  </div>
  <div className="flex flex-col md:flex-row   ">
    <div className=""><Card/></div>
    <div className="class"><Code/></div>
  </div>
  </div>
    
      
 
  );
};

export default Referral;
