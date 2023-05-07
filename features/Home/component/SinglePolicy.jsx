import React from "react";

const SinglePolicy = (props) => {
  const handleClick = (props) => {
    props.open();
    props.getId(props.id);
    props.Trackedindex(props.tarck);
    // props.Amount(props.amount)
  };

  const showClick = (props) => {
    props.close();
    props.getId(props.id);
    props.Trackedindex(props.tarck);
    props.Amount(props.amount);
  };
  return (
    <div className="border-[1px] rounded-xl w-[40%] p-6 shadow-xl mb-2">
     { !props.paid ? 
     <>
      <h2 className="text-[14px] leading-5 font-medium text-center text-[#6e6e72] flex font-poppins">
        Family Name:{" "}
        <span className="text-[#1A1941] text-[20px] ml-1 font-semibold">
          {" "}
          {props.FamilyName}
        </span>
      </h2>
      <h2 className="text-[14px] leading-5 font-medium mt-2 text-[#6e6e72] flex font-poppins">
        Percentage to cover:{" "}
        <span className="text-[#1A1941] text-[20px] font-semibold ml-1">
          {props.PercentageToCover}
        </span>
      </h2>
      <h2 className="text-[14px] leading-5 font-medium mt-2 text-[#6e6e72] flex font-poppins">
        Do you or any of the Insured person Smoke:{" "}
        <span className="text-[#1A1941] text-[20px] font-semibold ml-1">
          {props.Smoke == true ? "Yes" : "No"}
        </span>
      </h2>
      {/* <h2 className="text-[14px] leading-5 font-medium mt-2 text-[#6e6e72] flex font-poppins">
        Total Age of Number of people insured:{" "}
        <span className="text-[#1A1941] text-[20px] font-semibold ml-1">
          {props.Age}
        </span>
      </h2> */}
      <h2 className="text-[14px] leading-5 font-medium mt-2 text-[#6e6e72] flex font-poppins">
        Any Underline Family Issue:{" "}
        <span className="text-[#1A1941] text-[20px] font-semibold ml-1">
          {props.FamilyHealthStatus == true ? "Yes" : "No"}
        </span>
      </h2>
      <h2 className="text-[14px] leading-5 font-medium mt-2 text-[#6e6e72] flex font-poppins">
        {" "}
        No of People Insurance covers:{" "}
        <span className="text-[#1A1941] text-[20px] font-semibold ml-1">
          {props.FamilyNo}
        </span>
      </h2>
      {props.AmountPaid !== 0 && (
        <>
          <h2 className="text-[14px] leading-5 font-medium text-center text-[#6e6e72] flex font-poppins">
            Family Name:{" "}
            <span className="text-[#1A1941] text-[20px] ml-1 font-semibold">
              {" "}
              {props.FamilyName}
            </span>
          </h2>
          <h2 className="text-[14px] leading-5 font-medium mt-2 text-[#6e6e72] flex font-poppins">
            Percentage to cover:{" "}
            <span className="text-[#1A1941] text-[20px] font-semibold ml-1">
              {props.PercentageToCover}
            </span>
          </h2>
          <h2 className="text-[14px] leading-5 font-medium mt-2 text-[#6e6e72] flex font-poppins">
            Do you or any of the Insured person Smoke:{" "}
            <span className="text-[#1A1941] text-[20px] font-semibold ml-1">
              {props.Smoke == true ? "Yes" : "No"}
            </span>
          </h2>
          <h2 className="text-[14px] leading-5 font-medium mt-2 text-[#6e6e72] flex font-poppins">
            Total Age of Number of people insured:{" "}
            <span className="text-[#1A1941] text-[20px] font-semibold ml-1">
              {props.Age}
            </span>
          </h2>
          <h2 className="text-[14px] leading-5 font-medium mt-2 text-[#6e6e72] flex font-poppins">
            Any Underline Family Issue:{" "}
            <span className="text-[#1A1941] text-[20px] font-semibold ml-1">
              {props.FamilyHealthStatus == true ? "Yes" : "No"}
            </span>
          </h2>
          <h2 className="text-[14px] leading-5 font-medium mt-2 text-[#6e6e72] flex font-poppins">
            {" "}
            No of People Insurance covers:{" "}
            <span className="text-[#1A1941] text-[20px] font-semibold ml-1">
              {props.FamilyNo}
            </span>
          </h2>
          {props.AmountPaid !== 0 && (
            <>
              <h2 className="text-[14px] leading-5 font-medium mt-2 text-[#6e6e72] flex font-poppins">
                Deductible:{" "}
                <span className="text-[#1A1941] text-[20px] font-semibold ml-1">
                  {props.deductible}
                </span>
              </h2>
              <h2 className="text-[14px] leading-5 font-medium mt-2 text-[#6e6e72] flex font-poppins">
                CoverageAmount:{" "}
                <span className="text-[#1A1941] text-[20px] font-semibold ml-1">
                  {props.CoverageAmount}
                </span>
              </h2>
              <h2 className="text-[14px] leading-5 font-medium mt-2 text-[#6e6e72] flex font-poppins">
                Amount to be Paid:{" "}
                <span className="text-[#1A1941] text-[20px] font-semibold ml-1">
                  {props.AmountPaid}
                </span>
              </h2>
              <h2 className="text-[14px] leading-5 font-medium mt-2 text-[#6e6e72] flex font-poppins">
                Start Time:{" "}
                <span className="text-[#1A1941] text-[20px] font-semibold ml-1">
                  {props.StartTime}
                </span>
              </h2>
              <h2 className="text-[14px] leading-5 font-medium mt-2 text-[#6e6e72] flex font-poppins">
                End Time:{" "}
                <span className="text-[#1A1941] text-[20px] font-semibold ml-1">
                  {props.EndTime}
                </span>
              </h2>
            </>
          )}
          {props.AmountPaid === 0 ? (
            <button
              className="mt-6 h-[40px] rounded-lg  text-center border-[1px] mx-[75px] w-[50%] bg-[#1A1941] text-[#FFFFFF] border-[#1A1941] font-bold"
              onClick={() => handleClick(props)}
            >
              Get Quote
            </button>
          ) : (
            <button
              className="mt-6 h-[40px] rounded-lg  text-center border-[1px] mx-[75px] w-[50%] bg-[#1A1941] text-[#FFFFFF] border-[#1A1941] font-bold"
              onClick={() => showClick(props)}
            >
              Make Payment
            </button>
          )}
        </>
      ) : (
        <p className="">No New Policy Generated</p>
      )}
    </div>
  );
};

export default SinglePolicy;
