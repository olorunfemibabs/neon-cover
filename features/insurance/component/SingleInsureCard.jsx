import React, { useEffect, useState } from "react";
import { defaultAbiCoder } from "ethers/lib/utils";

import single from "../styles/single.module.css";

const SingleInsureCard = ({ open, ongetData, policy }) => {
  // const [data, setData] =useState("")

  // const handleClick = () => ( policyListed.map(policy) => {})
  // }

  const handleClick = (policy) => {
    open();
    ongetData(policy.InsureId);
  };

  return (
    <div className={`  border-[1px] rounded-lg w-[48.2%] px-4 pt-4 pb-6 mt-4`}>
      <h2 className="text-[30px] leading-[36px] font-bold text-center">
        {policy.PolicyName}
      </h2>
      <p className="text-[16px] leading-5 font-normal mt-2">
        Policy Active: {policy.PolicyActive ? "Yes" : "No"}
      </p>
      <p className="text-[16px] leading-5 font-normal mt-2">
        Agreement: {defaultAbiCoder.decode(["string"], policy.Agreement)}
      </p>
      {console.log(defaultAbiCoder.decode(["string"], policy.Agreement))}
      <p className="text-[16px] leading-5 font-normal mt-2">
        Minimum Period: {policy.MinimumPeriod.toString()} weeks
      </p>
      <p className="text-[16px] leading-5 font-normal mt-2">
        Maximum Period: {policy.MaximumPeriod.toString()} weeks
      </p>
      <button
        className="mt-6 h-[50px] rounded-lg  text-center border-[1px] w-[100%] bg-[#1A1941] text-[#FFFFFF] border-[#1A1941] font-bold"
        onClick={() => handleClick(policy)}
      >
        Buy Cover
      </button>
    </div>
  );
};

export default SingleInsureCard;
