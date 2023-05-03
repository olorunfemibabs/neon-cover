import React from "react";

const SinglePolicy = (props) => {
    const handleClick =(props)=>{
        props.open()
        props.getId(props.id)
        props.Trackedindex(props.tarck)
        // props.Amount(props.amount)
    }

    const showClick =(props)=>{
        props.close()
        props.getId(props.id)
        props.Trackedindex(props.tarck)
        props.Amount(props.amount)
    }
  return (
    <div>
        <h2>Family Name:{props.FamilyName}</h2>
        <h2>Percentage to cover:{props.PercentageToCover}</h2>
        <h2>Do you or any of the Insured person Smoke:{props.Smoke == true? "Yes" : "No"}</h2>
        <h2>Total Age of Number of people insured: {props.Age}</h2>
        <h2>Any Underline Family Issue: {props.FamilyHealthStatus == true ? "Yes" : "No"}</h2>
        <h2> No of People Insurance covers: {props.FamilyNo}</h2>
{ props.AmountPaid !== 0 &&
 <>

    <h2>Deductible:{props.deductible}</h2>
    <h2>CoverageAmount:{props.CoverageAmount}</h2>
    <h2>Amount to be Paid:{props.AmountPaid}</h2>
    <h2>Start Time:{props.StartTime}</h2>
    <h2>End Time:{props.EndTime}</h2>
</>
        }
{
props.AmountPaid === 0 ?
<button onClick={()=>handleClick(props)}>Get Quote</button>
:
<button onClick={()=>showClick(props)}>Make Payment</button>
}
    </div>
  );
};

export default SinglePolicy;
