/** @format */

import React from "react";
import { BiCheckShield, BiMoney } from "react-icons/bi";
import { FaHandHoldingUsd } from "react-icons/fa";
import { MdAttachMoney } from "react-icons/md";
const MajorCover = () => {
  return (
    <main className="mt-2">
      <section className="flex justify-between flex-wrap">
        <div className="w-[24%] h-[120px] text-[#FFFF] bg-[#1A1941] border-[#1A1941] border-[1px]  rounded-lg ">
          <div className="w-[96%]  mx-auto pt-4 flex items-center  ">
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#FFFFFF] rounded-full">
              <BiCheckShield size={20} className="text-[#1A1941]" />
            </div>
            <div className=" ml-3 w-[70%]">
            <h2 className="text-[16px] leading-5 ">Buy Protection</h2>
            <p className="text-[12px] leading-4 mt-2">Find protection that suit your needs and we bother about the underline risk</p>

            </div>
          </div>
        </div>
        <div className="w-[24%] h-[120px] text-[#1A1941] bg-[#FFFFFF] border-[#FFFFFF] border-[1px]  rounded-lg ">
          <div className="w-[96%]  mx-auto pt-4 flex items-center  ">
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#1A1941] rounded-full">
              <FaHandHoldingUsd size={20} className="text-[#FFFFFF]" />
            </div>
            <div className=" ml-3 w-[75%]">
            <h2 className="text-[16px] leading-5 ">Provide Protection</h2>
            <p className="text-[12px] leading-4 mt-2">Invest your capital and earn risk-adjusted rewards and you become part of the Governance System</p>

            </div>
          </div>
        </div>
        <div className="w-[24%] h-[120px] text-[#FFFF] bg-[#1A1941] border-[#1A1941] border-[1px]  rounded-lg ">
          <div className="w-[96%]  mx-auto pt-4 flex items-center  ">
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#FFFFFF] rounded-full">
              <MdAttachMoney size={20} className="text-[#1A1941]" />
            </div>
            <div className=" ml-3 w-[70%]">
            <h2 className="text-[16px] leading-5 ">Neon Balance</h2>
            <p className="text-[20px] leading-4 mt-2">10000000</p>

            </div>
          </div>
        </div>
        <div className="w-[24%] h-[120px] text-[#1A1941] bg-[#FFFFFF] border-[#FFFFFF] border-[1px]  rounded-lg ">
          <div className="w-[96%]  mx-auto pt-4 flex items-center  ">
            <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#1A1941] rounded-full">
              <BiMoney size={20} className="text-[#FFFFFF]" />
            </div>
            <div className=" ml-3 w-[75%]">
            <h2 className="text-[16px] leading-5 ">Buy Neon</h2>
            <p className="text-[12px] leading-4 mt-2">you can  purchase the community governed token. </p>

            </div>
          </div>
        </div>

      </section>
    </main>
  );
};

export default MajorCover;
