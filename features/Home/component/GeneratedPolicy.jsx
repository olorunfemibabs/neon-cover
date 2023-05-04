import React, { useEffect, useState } from "react";
import { useAccount, useContractRead } from "wagmi";
import { InsuranceAddr } from "../../../utils/contractAddr";
import ABI from "../../../utils/ABI/ABI.json";
import SinglePolicy from "./SinglePolicy";
import GenerateQuote from "./GenerateQuote";
import MakePayment from "./MakePayment";

const GeneratedPolicy = () => {
  const { address } = useAccount();
  const [open, setOpen] = useState(false);
  const [getData, setGetData] = useState();
  const [getTrackedData, setGetTrackedData] = useState();
  const [TrackedAmount, setTrackedAmount] = useState();
  const [openPayment, setOpenPayment] = useState(false);

  const getDataHandler = (data) => {
    setGetData(data);
  };
  const getTrackedHandler = (data) => {
    setGetTrackedData(data);
  };
  const getAmountHandler = (data) => {
    setTrackedAmount(data);
  };
  console.log("idd", TrackedAmount);

  const {
    data: ddd,
    isError,
    isLoading,
  } = useContractRead({
    address: InsuranceAddr,
    abi: ABI,
    functionName: "userGetPolicyPurchases",
    args: [address],
    // cacheOnBlock: true,
  });

  console.log(ddd);
  useEffect(() => {}, []);

  return (
    <div className="flex justify-between gap-8 flex-wrap mt-4">
      {ddd?.map((d, index) => {
        // console.log('heel',d);
        return (
          <SinglePolicy
            key={index}
            FamilyName={d.FamilyName}
            AmountPaid={Number(d.AmountPaid)}
            PercentageToCover={Number(d.PercentageToCover)}
            StartTime={Number(d.StartTime)}
            EndTime={Number(d.EndTime)}
            deductible={Number(d.deductible)}
            CoverageAmount={Number(d.CoverageAmount)}
            Smoke={d.Smoke}
            Age={Number(d.detailsOfhealth.age)}
            FamilyHealthStatus={d.detailsOfhealth.FamilyHealthStatus}
            FamilyNo={Number(d.detailsOfhealth.FamilyNo)}
            open={() => setOpen(true)}
            getId={() => getDataHandler(Number(d.InsureId))}
            Trackedindex={() => getTrackedHandler(Number(d.Trackedindex))}
            Amount={() => getAmountHandler(Number(d.AmountPaid))}
            close={() => setOpenPayment(true)}
          />
        );
      })}
      {/* <button onClick={props.open}>Get Quote</button> */}
      {open && (
        <GenerateQuote
          close={() => setOpen(false)}
          getData={getData}
          trackIndex={getTrackedData}
        />
      )}
      {openPayment && (
        <MakePayment
          getData={getData}
          trackIndex={getTrackedData}
          Amount={TrackedAmount}
          close={() => setOpenPayment(false)}
        />
      )}
    </div>
  );
};

export default GeneratedPolicy;
