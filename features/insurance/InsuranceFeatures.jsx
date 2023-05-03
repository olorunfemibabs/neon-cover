import React, { useEffect, useState } from "react";
import SingleInsureCard from "./component/SingleInsureCard";
import BuyCoverForm from "./component/BuyCoverForm";
import ABI from "../../utils/ABI/ABI.json";

import { useContractRead } from "wagmi";
import { InsuranceAddr } from "@/utils/contractAddr";
// import { data } from 'autoprefixer'

const InsuranceFeatures = () => {
  const [getData, setGetData] = useState();
  // console.log(data);
  console.log(getData);
  const [openBuyCover, setOpenBuyCover] = useState(false);

  const [policyListed, setPolicyListed] = useState([]);

  const { data: policies } = useContractRead({
    address: InsuranceAddr,
    abi: ABI,
    functionName: "returnAllPolicies",
  });

  useEffect(() => {
    setPolicyListed(policies);
  }, [policyListed]);

  console.log(policyListed);

  const getDataHandler = (data) => {
    setGetData(data);
  };
  console.log(`it is ${getData}`);

  return (
    <main className="w-[100%]">
      <div className=" flex justify-between gap-8 flex-wrap mt-4">
        {policies?.map((policy, index) => {
          return (
            <SingleInsureCard
              key={index}
              open={() => setOpenBuyCover(true)}
              ongetData={getDataHandler}
              policy={policy}
            />
          );
        })}
      </div>
      {openBuyCover && (
        <BuyCoverForm close={() => setOpenBuyCover(false)} getData={getData} />
      )}
    </main>
  );
};

export default InsuranceFeatures;
