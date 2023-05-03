import React from 'react'

const SinglePolicy = (props) => {
  return (
    <div>
        <h2>Family Name:{props.FamilyName}</h2>
        <h2>Percentage to cover:{props.PercentageToCover}</h2>
        <h2>Do you or any of the Insured person Smoke:{props.Smoke == true? "Yes" : "No"}</h2>
        <h2>Total Age of Number of people insured: {props.Age}</h2>
        <h2>Any Underline Family Issue: {props.FamilyHealthStatus == true ? "Yes" : "No"}</h2>
        <h2> No of People Insurance covers: {props.FamilyNo}</h2>
{ props.deductible !== 0 &&
 <>

    <h2>Deductible:{props.deductible}</h2>
    <h2>Amount to be Paid:{props.AmountPaid}</h2>
    <h2>Start Time:{props.StartTime}</h2>
    <h2>End Time:{props.EndTime}</h2>
</>
        }

        <button>Get Quote</button>
    </div>
  )
}

export default SinglePolicy