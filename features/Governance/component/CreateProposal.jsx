

/** @format */

import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction  } from 'wagmi'
import {InsuranceAddr} from "../../../utils/contractAddr"
import ABI from "../../../utils/ABI/ABI.json"
import { toast } from "react-toastify";
import Loading from "@/components/Loading";


const CreateProposal = (props) => {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState(0);

  

  const { config } = usePrepareContractWrite({
    mode: 'recklesslyUnprepared',
    address: InsuranceAddr,
    abi: ABI,
    functionName: 'createProposal',
    args:[description, amount],
  })

  const { data:coverData, isLoading:coverIsLoading, write } = useContractWrite(config);

  const { data, isError, isLoading } = useWaitForTransaction({
    hash: coverData?.hash,
    onSuccess:()=>{
        toast.success("Insurance policy created");
        setAmount(0);
        setDescription("")
        props.close()
    }
  })



  const submit = (e)=>{
    e.preventDefault();
    if(description === "" || amount ===""){
        toast.error("all fields required");
    }
    else{

        write();
    }



  }


  useEffect(()=>{

if(isError){
    toast.error("Transaction error try again")
}
  },[ isError])
  return (
    <div className="fixed top-0 w-[100%] " >
        {coverIsLoading || isLoading  && <Loading/>}
      <div className="w-[60%] ml-14 bg-white mt-10 rounded-lg">
        <div className="w-[90%] mx-auto pt-[54px] pb-[54px]">
          <div className="flex justify-between items-center">
            <div className="">
              <h2 className="font-bold text-[24px] leading-7 text-[#1A1941]">
                Create Proposal
              </h2>
              <p className="font-normal text-[14px] leading-4 text-[#959595] mt-[14px] ">
                Have a nice idea suggest to other community member
              </p>
            </div>
            <AiOutlineCloseCircle
              size={20}
              className="text-[#7C7B7B] cursor-pointer"
              onClick={props.close}
            />
          </div>
          <form>
            <div className="flex flex-col  justify-between mt-5">
              <div className="w-[100%]">
                <label className="text-[16px] font-[400] leading-5">
                    Proposal Description
                </label>{" "}
                <br />
               
                <textarea   rows="8" value={description}
                  onChange={(e)=>setDescription(e.target.value)} className="w-[100%]  border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2 pl-2 pr-2 pt-2" /> 
              </div>
              <div className="w-[48%]">
                <label className="text-[16px] font-[400] leading-5">
                  Amount
                </label>{" "}
                <br />
                <input
                  type="number"
                  value={amount}
                  onChange={(e)=>setAmount(e.target.value)}
                  className="h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2 px-2"
                />
              </div>
            </div>


            <button onClick={submit} className="text-[16px] font-bold w-[100%] h-[50px] bg-[#1A1941] text-[#FFFFFF] rounded-lg mt-4">
                Submit
              
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProposal;
