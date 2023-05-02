import React, { useState } from "react";
import SingleInsureCard from "./component/SingleInsureCard";
import BuyCoverForm from "./component/BuyCoverForm";
// import { data } from 'autoprefixer'

const InsuranceFeatures = () => {
  const [getData, setGetData] = useState();
  // console.log(data);
  console.log(getData);
  const [openBuyCover, setOpenBuyCover] = useState(false);

  const getDataHandler = (data) => {
    setGetData(data);
  };
  return (
    <main className="w-[100%]">
      <div className=" flex gap-8 flex-wrap mt-4">
      
        <SingleInsureCard
          open={() => setOpenBuyCover(true)}
          ongetData={getDataHandler}
        />
      </div>
      {openBuyCover && (
        <BuyCoverForm close={() => setOpenBuyCover(false)} getData={getData} />
      )}
    </main>
  );
};

export default InsuranceFeatures;
