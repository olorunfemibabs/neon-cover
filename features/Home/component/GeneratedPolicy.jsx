import React, { useEffect, useState } from 'react'
import { useContractRead } from 'wagmi';
import {InsuranceAddr} from "../../../utils/contractAddr";
import ABI from "../../../utils/ABI/ABI.json"

const GeneratedPolicy = () => {
    const[da, setDa] = useState([])
    const { data: ddd, isError, isLoading } = useContractRead({
        address: InsuranceAddr,
        abi: ABI,
        functionName: "userGetPolicyPurchases",
        args:[],
        // cacheOnBlock: true,
      });

      console.log(da);
useEffect(()=>{
setDa(ddd)
console.log('ll',ddd);
},[ddd])
  return (
    <div>GeneratedPolicy</div>
  )
}

export default GeneratedPolicy