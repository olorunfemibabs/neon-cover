/** @format */

import React from "react";
import { BiCheckShield, BiMoney } from "react-icons/bi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
const MajorCover = () => {
  return (
    <main className="mt-2 font-poppins">
      <section className="flex justify-between flex-wrap">
        <div className="w-[24%] h-[120px] text-[#1A1941] bg-[#FFFF] border-[#FFFF] border-[1px]  rounded-lg shadow-xl ">
          <div className="w-[96%]  mx-auto pt-4 flex items-center ">
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#1A1941] rounded-full">
              <BiCheckShield size={20} className="text-[#FFFFFF]" />
            </div>
            <div className=" ml-3 w-[70%]">
              <h2 className="text-[16px] leading-5 font-semibold">
                Buy Protection
              </h2>
              <p className="text-[12px] leading-4 mt-2">
                Find protection that suit your needs and we bother about the
                underline risk
              </p>
            </div>
          </div>
        </div>
        <div className="w-[24%] h-[120px] text-[#1A1941] bg-[#FFFF] border-[#FFFF] border-[1px]  rounded-lg shadow-xl ">
          <div className="w-[96%]  mx-auto pt-4 flex items-center  ">
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#1A1941] rounded-full">
              <FaHandHoldingUsd size={20} className="text-[#FFFFFF]" />
            </div>
            <div className=" ml-3 w-[70%]">
              <h2 className="text-[16px] leading-5 font-semibold">
                Provide Protection
              </h2>
              <p className="text-[12px] leading-4 mt-2">
                Invest your capital and earn risk-adjusted rewards and you
                become part of the Governance System
              </p>
            </div>
          </div>
        </div>
        <div className="w-[24%] h-[120px] text-[#1A1941] bg-[#FFFF] border-[#FFFF] border-[1px]  rounded-lg shadow-xl ">
          <div className="w-[96%]  mx-auto pt-4 flex items-center  ">
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#1A1941] rounded-full">
              <MdAttachMoney size={20} className="text-[#FFFF]" />
            </div>
            <div className=" ml-3 w-[70%]">
              <h2 className="text-[16px] leading-5 font-semibold">
                Neon Balance
              </h2>
              <p className="text-[14px] leading-4 mt-2">10000000</p>
            </div>
          </div>
        </div>
        <div className="w-[24%] h-[120px] text-[#1A1941] bg-[#FFFF] border-[#FFFF] border-[1px]  rounded-lg shadow-xl ">
          <div className="w-[96%]  mx-auto pt-4 flex items-center  ">
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#1A1941] rounded-full">
              <BiMoney size={20} className="text-[#FFFFFF]" />
            </div>
            <div className=" ml-3 w-[70%]">
              <h2 className="text-[16px] leading-5 font-semibold">Buy Neon</h2>
              <p className="text-[12px] leading-4 mt-2">
                You can purchase the community governed token.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MajorCover;
