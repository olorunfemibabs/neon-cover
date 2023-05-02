import React, {useEffect, useState} from 'react'
import { useContractRead } from 'wagmi';
import ABI from "../../../utils/ABI/ABI.json";
import { defaultAbiCoder } from "ethers/lib/utils";

import single from "../styles/single.module.css"

const SingleInsureCard = (props) => {

  const [policyListed, setPolicyListed] = useState([]);

  const abiDecoder = defaultAbiCoder;

  const {data: policies} = useContractRead({
    address: '0xb9868813de236BB4f05cD9c93FA5f30CBf91a84a',
    abi: ABI,
    functionName: 'returnAllPolicies',
  })

  useEffect(() => {
    setPolicyListed(policies);
  },[policyListed]);

  console.log(policyListed)

  return (
    <div className='relative w-full flex flex-row flex-wrap justify-evenly'>
      {
        policyListed.map((policy, index) => {
          return(
            <div key={index} className={`  border-[1px] rounded-lg w-[47%] px-4 pt-4 pb-6 mt-4`}>
              <h2 className="text-[30px] leading-[36px] font-bold text-center">{policy.PolicyName}</h2>
              <p className="text-[16px] leading-5 font-normal mt-2">Policy Active: {policy.PolicyActive ? "Yes" : "No"}</p>
              <p className="text-[16px] leading-5 font-normal mt-2">Agreement: {defaultAbiCoder.decode(["string"],policy.Agreement)}</p>
              <p className="text-[16px] leading-5 font-normal mt-2">Minimum Period: {policy.MinimumPeriod.toString()} weeks</p>
              <p className="text-[16px] leading-5 font-normal mt-2">Maximum Period: {policy.MaximumPeriod.toString()} weeks</p>
              <button className='mt-6 h-[50px] rounded-lg  text-center border-[1px] w-[100%] bg-[#1A1941] text-[#FFFFFF] border-[#1A1941] font-bold' onClick={props.open}>Buy Cover</button>

            </div>
          )
        })
      }
    </div>
  )
}

export default SingleInsureCard