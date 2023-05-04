import React from 'react'

const ExpiredPolicy = (props) => {
  const dateObject = new Date(); // Create a new Date object from the date string
const epochTime = dateObject.getTime() / 1000; // Convert the date to epoch time (in seconds)
// console.log(props.EndTime);

  return (
    <>
    
    {
      // epochTime 
      props.Claim === props.CoverageAmount ||  epochTime > props.EndTime  &&

    <div className='w-[100%] pb-4 border-[1px] rounded-lg'>
    <div className=" w-[96%] flex items-center pt-4 mx-auto">
        <div className="w-[80%]">
        <h2 className="text-[16px] font-semibold leading-5">{props.FamilyName}</h2>
        {/* <p className="text-[14px] font-medium mt-2">Total Votes Accrued:</p> */}
        <p className="text-[14px] font-medium mt-2">End Time: {props.EndTime}</p>

        {/* <p className="text-[14px] font-medium mt-2">Amount To Claim:</p>
        <p className="text-[14px] font-medium mt-2">Votes For:</p>
        <p className="text-[14px] font-medium mt-2">Votes Against:</p> */}
        </div>
        {/* <div className="w-[18%] flex gap-2">
          
            <button className='bg-[#EE2339] text-[12px] text-[#FFFFFF] font-bold w-[100px] h-[40px] rounded-lg'>Renew</button>
        </div> */}
    </div>
    </div>
    }
    </>
  )
}

export default ExpiredPolicy