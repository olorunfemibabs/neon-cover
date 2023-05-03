import React from "react";

const SinglePolicy = (props) => {
  return (
    <div className="border-[1px] rounded-2xl w-[45%] px-4 pt-4 pb-6 mt-4 shadow-xl bg-[#1A1941] text-[#FFFFFF]">
      <h2 className="text-[16px] leading-8 font-semibold ">
        Family Name: {props.FamilyName}
      </h2>
      <h2 className="text-[16px] leading-8 font-semibold ">
        Percentage to cover: {props.PercentageToCover}
      </h2>
      <h2 className="text-[16px] leading-5 font-semibold ">
        Do you or any of the Insured person Smoke:{" "}
        {props.Smoke == true ? "Yes" : "No"}
      </h2>
      <h2 className="text-[16px] leading-8 font-semibold ">
        Total Age of Number of people insured: {props.Age}
      </h2>
      <h2 className="text-[16px] leading-8 font-semibold ">
        Any Underline Family Issue:{" "}
        {props.FamilyHealthStatus == true ? "Yes" : "No"}
      </h2>
      <h2 className="text-[16px] leading-8 font-semibold ">
        {" "}
        No of People Insurance covers: {props.FamilyNo}
      </h2>
      {props.deductible !== 0 && (
        <>
          <h2 className="text-[30px] leading-8 font-semibold ">
            Deductible:{props.deductible}
          </h2>
          <h2 className="text-[16px] leading-8 font-semibold ">
            Amount to be Paid:{props.AmountPaid}
          </h2>
          <h2 className="text-[16px] leading-8 font-semibold">
            Start Time:{props.StartTime}
          </h2>
          <h2 className="text-[16px] leading-8 font-semibold ">
            End Time:{props.EndTime}
          </h2>
        </>
      )}

      <button className="mt-6 h-[50px] rounded-2xl mx-auto shadow-2xl  text-center border-[1px] w-[50%] bg-[#FFFFFF] text-[#1A1941] border-[#1A1941] font-bold">
        Get Quote
      </button>
    </div>
  );
};

export default SinglePolicy;
