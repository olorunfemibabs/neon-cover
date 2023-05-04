import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
import ABI from "../../../utils/ABI/ABI.json";
import { InsuranceAddr } from "../../../utils/contractAddr";
import Loading from "@/components/Loading";
import { toast } from "react-toastify";

const ClaimProtection = (props) => {
  const _insureId = Number(props.getData);
  const _trackIndex = Number(props.getIndex)
 
  const [amount, setAmount] = useState(0);

  const [link, setLink] = useState("");

  const { config: config1 } = usePrepareContractWrite({
    address: InsuranceAddr,
    abi: ABI,
    functionName: "claimHealthPolicy",
    args: [
        link,
        amount,
        _trackIndex,
      _insureId,
    ]
  });

  const {
    data: registerPolicyData,
    isLoading: registerPolicyIsLoading,
    write: register,
  } = useContractWrite(config1);

  const { data: registerWaitData, isLoading: registerWaitIsLoading } =
    useWaitForTransaction({
      hash: registerPolicyData?.hash,

      onSuccess(data) {
        toast.success("Claim submitted");
      },

      onError(error) {
        toast.error("Error: ", error);
      },
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      "aa",
        link,
        amount,
        _trackIndex,
      _insureId,
    );
    register();
  };



 
  useEffect(() => {
  
  }, []);
  return (
    <div className="fixed top-0 w-[100%] ">
      <div className="w-[60%] ml-14 bg-white mt-10 rounded-lg">
        <div className="w-[90%] mx-auto pt-[54px] pb-[54px]">
          <div className="flex justify-between items-center">
            <div className="">
              <h2 className="font-bold text-[24px] leading-7 text-[#1A1941]">
                Claim Insurance
              </h2>
              <p className="font-normal text-[14px] leading-4 text-[#959595] mt-[14px] ">
                Fill the Form to register Insurance
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
                  Link to Claim Evidence
                </label>{" "}
                <br />
                <input
                  type="text"
                  value={link}
                  placeholder="URL Link to claim Details"
                  className="h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2"
                  onChange={(e) => setLink(e.target.value)}
                />
              </div>
              <div className="w-[100%]">
                <label className="text-[16px] font-[400] leading-5">
                  Amount to Claim 
                </label>{" "}
                <br />
                <input
                  type="text"
                  value={amount}
                  className="h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2"
                  onChange={(e) => setAmount(e.target.value)}
                />
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




export default ClaimProtection