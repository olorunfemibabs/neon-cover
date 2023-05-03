import React, { useEffect, useState } from 'react'
import { useAccount, useContractRead } from 'wagmi';
import {InsuranceAddr} from "../../../utils/contractAddr";
import ABI from "../../../utils/ABI/ABI.json"
import SinglePolicy from './SinglePolicy';

const GeneratedPolicy = () => {
    const {address}= useAccount();
    console.log(address)

    const[da, setDa] = useState([])
    const { data: ddd, isError, isLoading } = useContractRead({
        address: InsuranceAddr,
        abi: ABI,
        functionName: "userGetPolicyPurchases",
        args:[address],
        // cacheOnBlock: true,
      });

    //   console.log(da);
      console.log('aa',ddd)
useEffect(()=>{
setDa(ddd)
console.log('ll',ddd);
if(isLoading){
    console.log("loading>>>");
}
},[ddd])

  return (

    <div>
        {ddd?.map((d, index)=>{
            // console.log('heel',d);
            return(
               <SinglePolicy
               key={index}
              FamilyName={d.FamilyName}
        AmountPaid={Number(d.AmountPaid)}
        PercentageToCover={Number(d.PercentageToCover)}
        StartTime={Number(d.StartTime)}
        EndTime={Number(d.EndTime)}
        deductible={Number(d.deductible)}
        Smoke={d.Smoke}
        Age={Number(d.detailsOfhealth.age)}
        FamilyHealthStatus={d.detailsOfhealth.FamilyHealthStatus}
        FamilyNo={Number(d.detailsOfhealth.FamilyNo)}

               />
            )
        })}
    </div>
  )
}

export default GeneratedPolicy