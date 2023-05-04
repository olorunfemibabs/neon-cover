/** @format */

import React, { useState } from "react";
import PolicyBought from "./PolicyBought";
import ExpiredPolicy from "./ExpiredPolicy";
import { useAccount, useContractRead } from "wagmi";
import { InsuranceAddr } from "@/utils/contractAddr";
import ABI from "@/utils/ABI/ABI.json"
import ClaimProtection from "./ClaimProtection";

const Policy = () => {
  const { address } = useAccount();
  const [openClaim, setOpenClaim] = useState(false)
const [getId, setGetId] = useState(0);
const[getIndex, setGetIndex] = useState(0);

  const getDataHandler = (data) => {
    setGetId(data);
  };
  const getDataindex = (data) => {
    setGetIndex(data);
  };
  const {
    data: ddd,
    isError,
    isLoading,
  } = useContractRead({
    address: InsuranceAddr,
    abi: ABI,
    functionName: "userGetPolicyPurchases",
    args: [address],
    watch: true,
  });
  console.log(ddd);
  return (
    <div className="flex justify-between">
      <section className="w-[48%] bg-[#FFFFFF] mt-4 h-[400px] rounded-xl shadow-lg overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <div className="w-[90%] mx-auto pt-2">
          <h2 className="text-[14px] font-bold mb-2"> Protection InProgress</h2>
{ddd?.map((data)=>(

<PolicyBought
FamilyName={data.FamilyName}
CoverageAmount={Number(data.CoverageAmount)}
StartTime={Number(data.StartTime)}
EndTime={Number(data.EndTime)}
PercentageToCover={Number(data.PercentageToCover)}
paid={data.paid}
open={()=>setOpenClaim(true)}
getId={()=>getDataHandler(Number(data.InsureId
  ))}
trackIndex ={()=>getDataindex(Number(data.Trackedindex))}
/>
))   
}
        </div>
      </section>
      <section className="w-[48%] bg-[#FFFFFF] mt-4 h-[400px] rounded-xl shadow-lg overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
        <div className="w-[90%] mx-auto pt-2">
          <h2 className="text-[14px] font-bold mb-2"> Protection Expired</h2>
          {ddd?.map((data)=>(
          <ExpiredPolicy
          key={Number(data.Trackedindex)}
          EndTime={Number(data.EndTime)}
          Claim={Number(data.Claim)}
          CoverageAmount={Number(data.CoverageAmount)}
          FamilyName={data.FamilyName}
          />

          ))}
        </div>
      </section>
      {
        openClaim &&
      <ClaimProtection getData={getId} getIndex={getIndex} close={()=>setOpenClaim(false)}/> 
      }
    </div>
  );
};

export default Policy;
