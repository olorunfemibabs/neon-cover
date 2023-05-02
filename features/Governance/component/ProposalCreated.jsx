/** @format */

import React, { useEffect} from "react";
import Proposal from "./Proposal";
import { useContractRead } from "wagmi";
import ABI from "../../../utils/ABI/ABI.json";
import { InsuranceAddr } from "@/utils/contractAddr";

import { defaultAbiCoder } from "ethers/lib/utils.js";
import Loading from "@/components/Loading";

const ProposalCreated = () => {

  const abiDecoder = defaultAbiCoder;
  const { data, isError, isLoading } = useContractRead({
    address: InsuranceAddr,
    abi: ABI,
    functionName: "returnProposals",
    cacheOnBlock: true,
  });

  

  console.log(data);

 
 
  useEffect(() => {
  
  });
  return (
    <main className="bg-[#FFFFFF] mt-4 h-[400px] rounded-lg overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      <div className="w-[90%] mx-auto pt-2">
        <h2 className="text-[14px] font-bold mb-2"> Proposal Created</h2>
        {/* <Loading/> */}
        {data?.map((data) => (
          <Proposal
          key={data.id}
            description={abiDecoder.decode(["string"], data.description)}
            amount={Number(data.amount)}
            voteFor={Number(data.votesFor)}
            voteAgainst={Number(data.votesAgainst)}
            id={Number(data.id)}

          />
        ))}
      </div>
    </main>
  );
};

export default ProposalCreated;
