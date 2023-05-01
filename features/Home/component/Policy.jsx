/** @format */

import React from "react";
import PolicyBought from "./PolicyBought";
import ExpiredPolicy from "./ExpiredPolicy";

const Policy = () => {
  return (
    <div className="flex justify-between">

    <section className="w-[48%] bg-[#FFFFFF] mt-4 h-[400px] rounded-lg overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <div className="w-[90%] mx-auto pt-2">
      <h2 className="text-[14px] font-bold mb-2"> Protection InProgress</h2>

        <PolicyBought />
      </div>
    </section>
    <section className="w-[48%] bg-[#FFFFFF] mt-4 h-[400px] rounded-lg overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <div className="w-[90%] mx-auto pt-2">
      <h2 className="text-[14px] font-bold mb-2"> Protection Expired</h2>
      
        <ExpiredPolicy/>
      </div>
    </section>
    </div>
  );
};

export default Policy;
