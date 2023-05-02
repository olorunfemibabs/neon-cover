import React, { useEffect, useState } from 'react'
import { InsuranceAddr } from '@/utils/contractAddr'
import ABI from "../../../utils/ABI/ABI.json"
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import Loading from '@/components/Loading'
import { toast } from 'react-toastify'

const Proposal = (props) => {
  const[votefor, setVotefor]=useState(false)
  const { config } = usePrepareContractWrite({
    mode: 'recklesslyUnprepared',
    address: InsuranceAddr,
    abi: ABI,
    functionName: 'vote',
    args:[props.id, true]
  })
  const { config:voteAgainst } = usePrepareContractWrite({ mode: 'recklesslyUnprepared',
    address: InsuranceAddr,
    abi: ABI,
    functionName: 'vote',
    args:[props.id, false]
  })

  const { data, isLoading, isSuccess, isError, error, write } = useContractWrite(config)

  const { data:voteAgainstData, isLoading:voteAgainstIsLoading, isSuccess:voteAgainstIsSuccess, isError:voteAgainstIserror, error:voteAgainsterror, write:voteAgainstWrite } = useContractWrite(voteAgainst)

  const { data:voteWaitdata, isError:voteWaitIsError, isLoading:voteWaitisLoading } = useWaitForTransaction({
    hash: data?.hash,
    onSuccess:()=>{
        toast.success("Vote succesful")

    }
  })
  const { data:voteWaitAgainstdata, isError:voteWaitAgainstIsError, isLoading:voteWaitAgainstisLoading } = useWaitForTransaction({
    hash: voteAgainstData?.hash,
    onSuccess:()=>{
        toast.success("Vote succesful")

    }
  })

  useEffect(()=>{
  if(isError){
    toast.error(error)
  }
  if(voteWaitIsError){
toast.error("error occured make sure you are an admin")
    console.log("ewe",voteAgainsterror);
  }
  if(voteWaitAgainstIsError){
    toast.error("error occured make sure you are an admin")
  }
  if(isLoading || voteAgainstIsLoading || voteWaitisLoading || voteWaitAgainstisLoading){
    toast.info("Loading")
  }
  
},[isError,error, voteWaitIsError])

  return (
    <div className='w-[100%] pb-4 border-[1px] rounded-lg'>
    
    <div className=" w-[96%] flex items-center pt-4 mx-auto">
        <div className="w-[80%]">

        <p className="text-[14px] font-medium mt-2">Proposal Description: {props.description}</p>
        <p className="text-[14px] font-medium mt-2">Amount To Claim: {props.amount}</p>
        <p className="text-[14px] font-medium mt-2">Votes For:{props.voteFor}</p>
        <p className="text-[14px] font-medium mt-2">Votes Against: {props.voteAgainst}</p>
        </div>
        <div className="w-[18%] flex gap-2">
            <button onClick={ ()=> write()} className='bg-[#19192E] text-[12px] text-[#FFFFFF] font-bold w-[100px] h-[40px] rounded-lg'>Votes for</button>
            <button onClick={() =>voteAgainstWrite()} className='bg-[#EE2339] text-[12px] text-[#FFFFFF] font-bold w-[100px] h-[40px] rounded-lg'>Reject</button>
        </div>
    </div>
    </div>
  )
}

export default Proposal