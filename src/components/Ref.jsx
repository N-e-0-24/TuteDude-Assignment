import React from "react";
import { Link } from "react-router-dom";
import {Arrow } from "../assets"

const Referral2 = () => {
  return (
    <div className="w-75 mx-auto mt-20">
      <p className="text-left text-sm md:ml-20">
        <a href="/" className="text-primary">
          UI/UX
        </a>{" "}
        {">"}{" "}
        <a href="/" className="text-primary">
          Refer & Earn
        </a>{" "}
        {">"}{" "}
        <a href="/screen2" className="text-primary">
          Friends Referred
        </a>
      </p>
      <a href="/">
        <h3 className="flex items-center text-primary goBack md:ml-20">
          <img src={Arrow} alt="arrow" className="mr-1" />
          go back
        </h3>
      </a>
      <div className="flex justify-between p-4">
        {/* Referral code */}
        <div className="text-left md:ml-20">
          <h3 className="text-purple-800 text-base font-normal mb-2">
            Your Referral Code
          </h3>
          <div className="border-2 w-[153px] h-[50px] flex  items-center justify-center rounded-[10px] ">
          <p className="text-gray-700 font-medium text-base text-center tracking-[.5rem] ">EDCH54</p>
          </div>
        </div>
        <div className="w-[153px] h-[74px] rounded-[20px] shadow-xl flex flex-col justify-center items-center md:mr-20">
  <p className="text-purple-800 font-medium text-base text-center">Wallet Balance</p>
  <h2 className="text-2xl font-semibold text-center">₹ 500</h2>
</div>

      </div>
    </div>
  );
};

export default Referral2;

