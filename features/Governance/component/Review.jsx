import React from 'react'
import Claim from './Claim'
import { useContractRead } from 'wagmi';
import { InsuranceAddr } from '@/utils/contractAddr';
import ABI from "../../../utils/ABI/ABI.json"

const Review = () => {
  const {
    data: ddd,
    isError,
    isLoading,
  } = useContractRead({
    address: InsuranceAddr,
    abi: ABI,
    functionName: "getAllPurchase",
    watch: true,
  });

  console.log(ddd);
  return (
    <main className='bg-[#FFFFFF] mt-4 h-[400px] rounded-lg overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
        <div className="w-[90%] mx-auto pt-2">

        <h2 className="text-[14px] font-bold mb-2"> Review Cover Claim</h2>

      {ddd?.map((data)=>(
 <>
{
  data.detailsToclaim.AmountToClaim > 0 &&
<Claim key={data.Trackedindex}  FamilyName={data.FamilyName} ValidateFor={Number(data.detailsToclaim.ValidateFor)} Validateagainst={Number(data.detailsToclaim.Validateagainst)} AmountToClaim={Number(data.detailsToclaim.AmountToClaim)} Report={data.detailsToclaim.Report} 
InsureId={Number(data.InsureId)}
address={data.Insurer}
index={Number(data.Trackedindex)}
PercentageToCover={Number(data.PercentageToCover)}
/>
// :
// null
}
</>
      )) 
      }
        </div>
    </main>
  )
}

export default Review