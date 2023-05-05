import React from 'react'
import { InsuranceAddr } from '@/utils/contractAddr';
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi';
import ABI from "../../../utils/ABI/ABI.json"

const Claim = (props) => {
  
  const { config } = usePrepareContractWrite({
    // mode: 'recklesslyUnprepared',
    address: InsuranceAddr,
    abi: ABI,
    functionName: 'validateClaim',
    args:[props.InsureId,props.address, true],
    watch: true,
  })
  const { data:coverData, isLoading:coverIsLoading, write } = useContractWrite(config);

  const { data, isError, isLoading } = useWaitForTransaction({
    hash: coverData?.hash,
    onSuccess:()=>{
        toast.success("")
        
      
    }
  })
  return (
    <div className='w-[100%] pb-4 border-[1px] rounded-lg'>
        <div className=" w-[96%] flex items-center pt-4 mx-auto">
            <div className="w-[80%]">
            <h2 className="text-[16px] font-semibold leading-5">{props.FamilyName}</h2>
            
            <p className="text-[14px] font-medium mt-2">Amount To Claim:{props.AmountToClaim}</p>
            <p className="text-[14px] font-medium mt-2">Percentage to cover:{props.PercentageToCover}%</p>
            <p className="text-[14px] font-medium mt-2">Claim Evidence: {props.Report}</p>
            <p className="text-[14px] font-medium mt-2">Total Votes Accrued: {props.ValidateFor + props.Validateagainst}</p>
            <p className="text-[14px] font-medium mt-2">Votes For: {props.ValidateFor}</p>
            <p className="text-[14px] font-medium mt-2">Votes Against: {props.Validateagainst}</p>
            </div>
            <div className="w-[18%] flex gap-2">
                <button onClick={()=>write()} className='bg-[#19192E] text-[12px] text-[#FFFFFF] font-bold w-[100px] h-[40px] rounded-lg'>Votes for</button>
                <button className='bg-[#EE2339] text-[12px] text-[#FFFFFF] font-bold w-[100px] h-[40px] rounded-lg'>Reject</button>
            </div>
        </div>
        </div>
  )
}

export default Claim