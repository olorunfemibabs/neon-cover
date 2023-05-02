import React, { useEffect, useState } from "react";
import { useContractRead } from "wagmi";
import ABI from "../../../utils/ABI/ABI.json";
import { defaultAbiCoder } from "ethers/lib/utils";

import single from "../styles/single.module.css";

const SingleInsureCard = ({ open, ongetData }) => {
  // const [data, setData] =useState("")

  const [policyListed, setPolicyListed] = useState([]);

  const abiDecoder = defaultAbiCoder;

  const { data: policies } = useContractRead({
    address: "0x2fdfAe4285260160d2FdFC114a00Bcd61a25760A",
    abi: ABI,
    functionName: "returnAllPolicies",
  });
  const handleClick = (policy) => {
    open();
    ongetData(policy.InsureId);
  };

  useEffect(() => {
    setPolicyListed(policies);
  }, [policyListed]);

  console.log(policyListed);

  // const handleClick = () => ( policyListed.map(policy) => {})
  // }

  return (
    <div className="relative w-full flex flex-row flex-wrap justify-between">
      {policies.map((policy, index) => {
        return (
          <div
            key={index}
            className={`  border-[1px] rounded-lg w-[47%] px-4 pt-4 pb-6 mt-4`}
          >
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
            {/* <p>{Number(policy.InsureId)}</p> */}
          </div>
        );
      })}
    </div>
  );
};

export default SingleInsureCard;
