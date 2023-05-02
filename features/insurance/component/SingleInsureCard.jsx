import React, {useEffect, useState} from 'react'
import { useContractRead } from 'wagmi';
import ABI from "../../../utils/ABI/ABI.json";

import single from "../styles/single.module.css"

const SingleInsureCard = (props) => {

  const [policyListed, setPolicyListed] = useState();

  const {data: policies} = useContractRead({
    address: '0x5b951BFE56D9aEDc3De31b3AC5CB075E78AD07fd',
    abi: ABI,
    functionName: 'arrayPolicy',
    args: [0],
  })

  useEffect(() => {
    setPolicyListed(policies);
  },[policyListed]);

  console.log(policyListed)


  return (
    <div className={`  border-[1px] rounded-lg w-[48.4%] px-4 pt-4 pb-6`}>
        <h2 className="text-[30px] leading-[36px] font-bold text-center">Policy Name</h2>
        <p className="text-[16px] leading-5 font-normal mt-2">Policy Active:</p>
        <p className="text-[16px] leading-5 font-normal mt-2">Agreement:</p>
        <p className="text-[16px] leading-5 font-normal mt-2">Minimum Period:</p>
        <p className="text-[16px] leading-5 font-normal mt-2">Maximum Period:</p>
        <button className='mt-6 h-[50px] rounded-lg  text-center border-[1px] w-[100%] bg-[#1A1941] text-[#FFFFFF] border-[#1A1941] font-bold' onClick={props.open}>Buy Cover</button>

        </div>
  )
}

export default SingleInsureCard