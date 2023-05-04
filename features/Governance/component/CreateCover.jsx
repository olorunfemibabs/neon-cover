/** @format */

import React, { useEffect, useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useContractWrite, usePrepareContractWrite, useWaitForTransaction  } from 'wagmi'
import {InsuranceAddr} from "../../../utils/contractAddr"
import ABI from "../../../utils/ABI/ABI.json"
import { toast } from "react-toastify";
import Loading from "@/components/Loading";


const CreateCover = (props) => {
  const [policyName, setPolicyName] = useState("");
  const [policyOffer, setPolicyOffer] = useState([]);

  const [agreement, setAgreement] = useState([{detail:""}]);
  const [miniPeriod, setMiniPeriod] = useState(0);
  const [maxPeriod, setMaxPeriod] = useState(0);
  

  const { config } = usePrepareContractWrite({
    mode: 'recklesslyUnprepared',
    address: InsuranceAddr,
    abi: ABI,
    functionName: 'createInsurancePolicy',
    args:[policyName, [policyOffer], agreement,miniPeriod, maxPeriod],
  })

  const { data:coverData, isLoading:coverIsLoading, write } = useContractWrite(config);

  const { data, isError, isLoading } = useWaitForTransaction({
    hash: coverData?.hash,
    onSuccess:()=>{
        toast.success("Insurance policy created")
        setMaxPeriod(0)
        setMiniPeriod(0)
        setPolicyOffer([])
        setAgreement([])
        setPolicyName("")
        props.close()
    }
  })

  const addFields = (e) => {
    e.preventDefault();
    // let newfield = {detail: "" };

    setAgreement([...agreement, ""]);
  };

  const handleFormChange = (index, event) => {

    let data = [...agreement];
    data[index]= event.target.value;
    setAgreement(data);
 }


  const removeFields = (index) => {
    let data = [...agreement];
    data.splice(index, 1);
    setAgreement(data);
  };

  const submit = (e)=>{
    e.preventDefault();
    if(policyName === "" || policyOffer ==="" || agreement ==="" || miniPeriod === "" || maxPeriod === ""){
        toast.error("all fields required");
    }
    else{

        write?.();
    }



  }


  useEffect(()=>{

if(isError){
    toast.error("Transaction error try again")

}
setAgreement([""])
  },[ isError])
  return (
    <div className="fixed top-0 w-[100%] ">
        {coverIsLoading || isLoading  && <Loading/>}
      <div className="w-[60%] ml-14 bg-white mt-10 rounded-lg">
        <div className="w-[90%] mx-auto pt-[54px] pb-[54px]">
          <div className="flex justify-between items-center">
            <div className="">
              <h2 className="font-bold text-[24px] leading-7 text-[#1A1941]">
                Create Insurance Policy
              </h2>
              <p className="font-normal text-[14px] leading-4 text-[#959595] mt-[14px] ">
                Fill the Form to create Insurance Policy
              </p>
            </div>
            <AiOutlineCloseCircle
              size={20}
              className="text-[#7C7B7B] cursor-pointer"
              onClick={props.close}
            />
          </div>
          <form>
            <div className="flex  justify-between mt-5">
              <div className="w-[48%]">
                <label className="text-[16px] font-[400] leading-5">
                  Policy Name
                </label>{" "}
                <br />
                <input
                  type="text"
                  value={policyName}
                  onChange={(e)=>setPolicyName(e.target.value)}
                  className="h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2"
                />
              </div>
              <div className="w-[48%]">
                <label className="text-[16px] font-[400] leading-5">
                  Policy Offer
                </label>{" "}
                <br />
                <input
                  type="text"
                  value={policyOffer}
                  onChange={(e)=>setPolicyOffer(e.target.value)}
                  className="h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2"
                />
              </div>
            </div>
            <div className="flex flex-col justify-between mt-5">
            
              {/* {agreement.length > 0 && (<> */}
              
              {agreement.map((input, index) => {
                return (
                  <div key={index} className="flex items-center gap-1 ">
                    <div  className="w-[90%] mt-4">
                      <label className="text-[16px] font-[400] leading-5">
                        Policy Agreement
                      </label>{" "}
                      <br />
                      <input
                        type="text"
                        value={input}
                      onChange={(event) => handleFormChange(index, event)}
                        className="h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2"
                      />
                    </div>
                    <button
                      className="text-[12px] h-[50px] pt-4 font-bold"
                      onClick={(e) => {
                        e.preventDefault();
                        removeFields(index);
                      }}
                    >
                      Remove Agreement
                    </button>
                  </div>
                );
              })}
              {/* </>)} */}

              


              <button
                className="text-[16px] font-semibold mt-2"
                onClick={addFields}
              >
                Add Agreement
              </button>
            </div>

            <div className="flex justify-between mt-5">
              <div className="w-[48%]">
                <label className="text-[16px] font-[400] leading-5">
                  Minimum Period
                </label>{" "}
                <br />
                <input
                  type="number"
                  value={miniPeriod}
                  onChange={(e)=>setMiniPeriod(e.target.value)}
                  className="h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2"
                />
              </div>
              <div className="w-[48%]">
                <label className="text-[16px] font-[400] leading-5">
                  Maximum period
                </label>{" "}
                <br />
                <input
                  type="number"
                  value={maxPeriod}
                  onChange={(e)=>setMaxPeriod(e.target.value)}
                  className="h-[50px] w-[100%] border-[1px] border-[#E5E5E5] rounded-lg bg-[#F9F9F9] outline-[#1A1941]  mt-2"
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

export default CreateCover;
