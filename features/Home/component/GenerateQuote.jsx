import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import ABI from "../../../utils/ABI/ABI.json";
import {InsuranceAddr} from "../../../utils/contractAddr"
import Loading from "@/components/Loading";
import { toast } from "react-toastify";

const GenerateQuote = (props) => {

  const _insureId = props.getData;
  const index = props.trackIndex;
// console.log(index);

  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime ] = useState(0);
  const [amount, setAmount] = useState(0)

  const { config } = usePrepareContractWrite({
    address: InsuranceAddr,
    abi: ABI,
    functionName: "generateHealthPolicy",
    args: [
        _insureId,
        startTime,
        endTime,
        Number(amount),
        Number(index-1)

    ],
  });

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
      console.log('llo',_insureId,
        startTime,
        endTime,
        Number(amount))
    if(  
        startTime=="",
        endTime=="",
        amount==""){
            toast.error("All fields required")
        }


    register();

   
  };
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
                Get Registered Insurance Quote
              </h2>
              <p className="font-normal text-[14px] leading-4 text-[#959595] mt-[14px] ">
                Fill the Form to create the insurance quote
              </p>
            </div>
            <AiOutlineCloseCircle
              size={20}
              className="text-[#7C7B7B] cursor-pointer"
              onClick={props.close}
            />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col justify-between mt-5">
              <div className="w-[100%]">
                <label className="text-[16px] font-[400] leading-5">
                  Start Time
                </label>{" "}
                <br />
                <input
                  type="Number"
                  value={startTime}
                  placeholder="When you waant your Insurance to start in weeks"
                  className="h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2"
                  onChange={(e) => setStartTime(e.target.value)}
                />
              </div>
              <div className="w-[100%] mt-4">
                <label className="text-[16px] font-[400] leading-5">
                  End Time
                </label>{" "}
                <br />
                <input
                  type="Number"
                  value={endTime}
                  placeholder="When you waant your Insurance to End in weeks"
                  className="h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2"
                  onChange={(e) => setEndTime(e.target.value)}
                />
              </div>
              <div className="w-[100%] mt-4">
                <label className="text-[16px] font-[400] leading-5">
                  Amount to Insure
                </label>{" "}
                <br />
                <select
                  name=""
                  id=""
                  value={amount}
                  className="h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2"
                  onChange={(e) => setAmount(e.target.value)}
                >
                  <option value="">select</option>
                  <option value="500">$500</option>
                  <option value="1000">$1000</option>
                  <option value="2500">$2500</option>
                  <option value="5000">$5000</option>
                  <option value="7000">$7000</option>
                  <option value="10000">$10000</option>
                </select>
              </div>

            </div>
        

            <button className="text-[16px] font-bold w-[100%] h-[50px] bg-[#1A1941] text-[#FFFFFF] rounded-lg mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GenerateQuote;
