import React from "react";

const Test = () => {
  const data = [
    {
      name: "Dhiraj Saxsena",
      time: "14 Sep, 2022",
      courses_enrolled: 6,
      amount: 185,
      courses: ["UI/UX", "Photoshop", "Illustrator", "Python", "Java", "MERN"],
    },
    {
      name: "Subhash Mishra",
      time: "15 Sep, 2022",
      courses_enrolled: 23,
      amount: 485,
      courses: [
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "Java",
        "MERN",
        "C++",
      ],
    },
    {
      name: "Prafull Kumar",
      time: "16 Sep, 2022",
      courses_enrolled: 23,
      amount: 485,
      courses: ["UI/UX", "Photoshop", "Illustrator", "Python", "Java", "MERN"],
    },
  ];

  return (

    <div className="class md:ml-20">
        <h3 className="text-purple-800 font-semibold text-xl mb-4">
        Friends who Enrolled ({data.length})
      </h3>
    <div className="w-358 h-228 mx-auto text-left mt-8 mb-6 overflow-x-auto">
     
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-40 md:gap-x-8">
        {/* Map */}
        {data.map((el, i) => (
          <div
            key={i}
            className="bg-gradient-to-l from-primary to-orange-400 rounded-[20px] shadow-xl p-4 w-[358px] h-[228px]"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-semibold text-lg text-white w-36 overflow-hidden overflow-ellipsis whitespace-nowrap">
                {el.name}
              </h3>
              <p className="text-gray-300 text-sm">{el.time}</p>
            </div>
            <p className="text-gray-300 mb-2">Courses Enrolled ({el.courses.length})</p>
            <div className="grid grid-cols-3 gap-2 overflow-x-auto flex-wrap h-32">
              {/* Map course */}
              {el.courses &&
                el.courses.map((el, i) => (
                  <div key={i}>
                    <p className="border border-gray-300 rounded-lg p-1 text-center text-gray-400 text-xs break-all">
                      {el}
                    </p>
                  </div>
                ))}
            </div>
            <div className="flex flex-row items-center -mt-6">
              <h2 className="font-semibold text-lg text-white mt-2">
                Referral Amount{" "}
                <span className="font-bold text-2xl text-white">₹{el.amount}</span>
              </h2>
            </div>
          </div>
        ))}
      </div>
        
      
    </div>
    <div className="class"><p className="text-purple-800 font-medium mt-4 mb-10">Terms & Conditions</p></div>
    </div>
  );
};

export default Test;
