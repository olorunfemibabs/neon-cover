import React from 'react'
import { useContractRead } from 'wagmi';
import {InsuranceAddr} from "../../../utils/contractAddr";
import ABI from "../../../utils/ABI/ABI.json"

const GeneratedPolicy = () => {
    const { data, isError, isLoading } = useContractRead({
        address: InsuranceAddr,
        abi: ABI,
        functionName: "userGetPolicyPurchases ",
        cacheOnBlock: true,
      });

      console.log(data);
  return (
    <div>GeneratedPolicy</div>
  )
}

export default GeneratedPolicy