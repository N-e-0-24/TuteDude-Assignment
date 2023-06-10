import React from "react";
import {A,B,C,D,E} from "../assets";

export const How = () => {
  const data = [
    {
      image: A,
      title: "Invite your Friends",
      description: "Share the link tutedude.com with your friends",
    },
    {
      image: B,
      title: "Friend purchases any course",
      description: "Using your REFERRAL CODE in the payments page",
    },
    {
      image: C,
      title: "You get ₹ 200 as referral money",
      description: "On total purchase the friend makes into your wallet",
    },
    {
      image: D,
      title: "Your Friend gets ₹ 200 Off",
      description:
        "On his overall fee on successful purchase using your referral code",
    },
    {
      image: E,
      title: "Transfer money from wallet",
      description:
        "When the wallet balance reaches ₹200 or more, you can withdraw it",
    },
  ];

  return (
    <div className=" p-6">
      <h2 className="text-2xl font-bold mb-4 text-primary lg:ml-16">How does it work?</h2>
      <div className="grid grid-cols-1  md:grid-cols-2 ">
        {/* Map all headings and images */}
        {data.map((el, i) => (
          <div key={i} className="flex items-center mb-4  bg-white rounded ">
            <div className="flex items-center justify-center w-[65px] h-[65px] bg-opacity-25 bg-gray-300 rounded-full mr-2">
            <img src={el.image} alt={el.title} className="w-[32px] h-[28px]  " />
            </div>
            <div>
              <h2 className="font-bold mb-1">{el.title}</h2>
              <p className="max-w-xl">{el.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-row">
        <a href="/dashboard" className="font-poppins font-medium text-lg text-primary">Friends Who Enrolled<br/></a>
        </div>
        <div>
        <a href="/" className="font-poppins font-medium text-lg text-primary">Terms & Conditions</a>
      </div>
     
    </div>
  );
};
export default How;