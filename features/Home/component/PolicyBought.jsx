import React from 'react'

const PolicyBought = (props) => {

  const openClick = (props) =>{
    props.open()
    props.getId(props.id)
    props.trackIndex(props.track)
  }
  const dateObject = new Date(); // Create a new Date object from the date string
  const epochTime = dateObject.getTime() / 1000; // Convert the date to epoch time (in seconds)


  return (
    <>
    
    {props.paid && props.EndTime > epochTime  ?
      <div className='w-[100%] pb-4 border-[1px] rounded-lg'>
          <div className=" w-[96%] flex items-center pt-4 mx-auto">
              <div className="w-[80%]">
              <h2 className="text-[16px] font-semibold leading-5">{props.FamilyName}</h2>
              {/* <p className="text-[14px] font-medium mt-2">Total Votes Accrued:</p> */}
              <p className="text-[14px] font-medium mt-2">Coverage Amount: {props.CoverageAmount}</p>
              <p className="text-[14px] font-medium mt-2">Percentage to cover: {props.PercentageToCover}%</p>
              <p className="text-[14px] font-medium mt-2">Start Time: {props.StartTime}</p>
              <p className="text-[14px] font-medium mt-2">End Time: {props.EndTime}</p>
              {/* <p className="text-[14px] font-medium mt-2">Votes Against:</p> */}
              </div>
              <div onClick={()=>openClick(props)} className="w-[18%] flex gap-2">
                  <button className='bg-[#19192E] text-[12px] text-[#FFFFFF] font-bold w-[100px] h-[40px] rounded-lg'>Claim Insurance</button>
              </div>
          </div>
          </div>
      :
          <p className="">No Protection Covered Yet</p>
        } 

    </>
  )
}

export default PolicyBought