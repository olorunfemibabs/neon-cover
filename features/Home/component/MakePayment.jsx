import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
  useContractRead,
  useAccount,

} from "wagmi";
import ABI from "../../../utils/ABI/ABI.json";
import TokenABI from '../../../utils/ABI/TokenABI.json';
import {InsuranceAddr, NeonAddr} from "../../../utils/contractAddr"
import Loading from "@/components/Loading";
import { toast } from "react-toastify";

const MakePayment = (props) => {
const {address} = useAccount();

  const _insureId = props.getData;
  const index = props.trackIndex;
  const amount = props.Amount;
console.log("amm",index);

//   const [startTime, setStartTime] = useState(0);
//   const [endTime, setEndTime ] = useState(0);
//   const [amount, setAmount] = useState(0)

  const { config } = usePrepareContractWrite({
    address: InsuranceAddr,
    abi: ABI,
    functionName: "payInsurance",
    args: [
        Number(index),
         Number(amount),
         _insureId,
         NeonAddr,
    ],
  });

  const { config:config1 } = usePrepareContractWrite({
    address: NeonAddr,
    abi: TokenABI,
    functionName: "approve",
    args: [
        InsuranceAddr,
        Number(amount),
    ],
    watch: true,
  })

  const {
    data: approveData,
    isLoading: approveIsLoading,
    write: approve,
  } = useContractWrite(config1);

  const { data: approveWaitData, isLoading: approveWaitIsLoading } = useWaitForTransaction({
    hash: approveData?.hash,
    onSuccess:() => {
        toast.success('Approval granted');
    },

    onError(error) {
        console.log('Error: ', error);
    }
  });

  const handleApprove = (e) => {
    e.preventDefault();
    if(amount === '') {
        toast.error('Amount field required');
    }

    approve?.();
  }

  const {
    data: registerPolicyData,
    isLoading: registerPolicyIsLoading,
    write: register,
  } = useContractWrite(config);

  const { data: registerWaitData, isLoading: registerWaitIsLoading, isError } =
    useWaitForTransaction({
      hash: registerPolicyData?.hash,
    onSuccess:()=> {
        toast.success("Insurance registration successful");
      },

      onError(error) {
        console.log("Error: ", error);
      },
    });

  const handleSubmit = (e) => {
      e.preventDefault();
console.log( Number(index-1),
amount,
_insureId,
NeonAddr)
    if(  
        Number(index-1),
        amount,
        _insureId,
        NeonAddr){
            toast.error("All fields required")
        }


    register();

   
  };

//   read allowance

const { data: allowanceData, isError:readError, isLoading } = useContractRead({
    address: NeonAddr,
    abi: TokenABI,
    functionName: "allowance",
    args:[address, InsuranceAddr],
    // cacheOnBlock: true,
    watch: true,
  });
//  console.log("allow",allowanceData)

useEffect(()=>{
    if(isError){
        toast.error("Error occured please try again")
    }
},[isError])

  return (
    <div className="fixed top-0 w-[100%] ">
       { registerWaitIsLoading || registerPolicyIsLoading && <Loading/>}
      <div className="w-[60%] ml-14 bg-white mt-10 rounded-lg">
        <div className="w-[90%] mx-auto pt-[54px] pb-[54px]">
          <div className="flex justify-between items-center">
            <div className="">
              <h2 className="font-bold text-[24px] leading-7 text-[#1A1941]">
                Make Insurance Payment
              </h2>
              <p className="font-normal text-[14px] leading-4 text-[#959595] mt-[14px] ">
                Kindly make payment for your insurance
              </p>
            </div>
            <AiOutlineCloseCircle
              size={20}
              className="text-[#7C7B7B] cursor-pointer"
              onClick={props.close}
            />
          </div>
          <form >
            <div className="flex flex-col justify-between mt-5">
              <div className="w-[100%]">
                <label className="text-[16px] font-[400] leading-5">
                  Amount
                </label>{" "}
                <br />
                <input
                  type="Number"
                  value={Number(amount)}
                  placeholder="When you waant your Insurance to start in weeks"
                  className="h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2"
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
       

            </div>
        
        {
            Number(allowanceData) >=  Number(amount) ?
            <button onClick={handleSubmit} className="text-[16px] font-bold w-[100%] h-[50px] bg-[#1A1941] text-[#FFFFFF] rounded-lg mt-4">
            Make Payment
          </button>
          :
            <button onClick={handleApprove} className="text-[16px] font-bold w-[100%] h-[50px] bg-[#1A1941] text-[#FFFFFF] rounded-lg mt-4">
              Approve Payment
            </button>
        }
           


          </form>
        </div>
      </div>
    </div>
  );
};

export default MakePayment;
