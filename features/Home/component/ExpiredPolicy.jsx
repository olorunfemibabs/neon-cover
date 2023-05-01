import React from 'react'

const ExpiredPolicy = () => {
  return (
    <div className='w-[100%] pb-4 border-[1px] rounded-lg'>
    <div className=" w-[96%] flex items-center pt-4 mx-auto">
        <div className="w-[80%]">
        <h2 className="text-[16px] font-semibold leading-5">Adeyemi Daniel</h2>
        <p className="text-[14px] font-medium mt-2">Total Votes Accrued:</p>
        <p className="text-[14px] font-medium mt-2">Amount To Claim:</p>
        <p className="text-[14px] font-medium mt-2">Votes For:</p>
        <p className="text-[14px] font-medium mt-2">Votes Against:</p>
        </div>
        <div className="w-[18%] flex gap-2">
          
            <button className='bg-[#EE2339] text-[12px] text-[#FFFFFF] font-bold w-[100px] h-[40px] rounded-lg'>Renew</button>
        </div>
    </div>
    </div>
  )
}

export default ExpiredPolicy