import React from "react";

const Card = () => {
  return (
    <div className="">
      {/* Card for mobile */}
      <div className="lg:hidden">
        <div className="w-[320px] h-[180px] rounded-[20px]  p-4 space-y-4 m-1 flex">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <div>
                <p className="text-primary font-poppins text-base font-normal leading-6">
                  Referral Earning
                </p>
                <h2 className="text-3xl font-medium leading-12">₹ 2,500</h2>
              </div>
              <div className="flex">
                <div className="class">
                  <p className="text-primary font-poppins justify-end">
                    Total Referrals
                  </p>
                  <h2 className="text-3xl font-medium leading-12 font-poppins">
                    7
                  </h2>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-6">
              <div className="flex shrink">
                <div>
                  <p className="text-primary font-poppins">Wallet Balance</p>
                  <h2 className="text-3xl font-medium leading-12 font-poppins">
                    ₹ 500
                  </h2>
                </div>
              </div>
              <div className="flex-grow mt-4">
                <div className="flex justify-end">
                  <a
                    href="/"
                    className="bg-primary text-white px-4 py-2 rounded-[20px] text-center font-poppins font-medium text-base leading-6"
                  >
                    Withdraw Balance
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Card for desktop */}
      <div className="hidden lg:block ml-12 ">
        <div className="w-[486px] h-[188px] p-4 shadow-xl rounded-[20px] bg-[conic-gradient(at_top_left,_var(--tw-gradient-stops))] from-white via-white to-gray-300p-4">
          {/* Card content */}
          <div className="flex flex-col">
            <div className="flex flex-row justify-between">
              <div className="class">
                <p className="text-primary font-poppins">Referral Earning</p>
                <h2 className="font-medium text-2xl leading-12 font-poppins">
                  ₹ 2,500
                </h2>
              </div>
              <div className="class">
                <p className="text-primary font-poppins">Total Referrals</p>
                <h2 className="font-medium text-2xl leading-12 font-poppins">
                  7
                </h2>
              </div>
              <div className="class">
                <p className="text-primary font-poppins">Wallet Balance</p>
                <h2 className="font-medium text-2xl leading-12 font-poppins">
                  ₹ 500
                </h2>
              </div>
            </div>
            <div className="class flex justify-center mt-12">
              <div className="w-[180px] h-[40px] flex justify-center">
                <a
                  href="/"
                  className="bg-primary text-white px-4 py-2 rounded-[20px] text-center font-poppins font-medium text-base leading-6"
                >
                  Withdraw Balance
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
