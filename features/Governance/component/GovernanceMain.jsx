import React from 'react'
import { BsXbox, BsYelp } from "react-icons/bs";

const GovernanceMain = () => {
  return (
    <main>
      <section className='flex justify-between mt-4'>
<div className="w-[48%] border-[1px] rounded-lg h-[144px] bg-[#19192E] cursor-pointer hover:text-[#EEEEEE]">
  <div className="w-[90%] mx-auto pt-6 flex items-center">
<div className="w-[80px] h-[80px] border-[1px] px-auto rounded-lg bg-[#FFFFFF]">

<BsXbox size={40} className='mx-auto mt-4 '/>
</div>

<div className="ml-4 hover:text-[#EEEEEE]">

<h2 className="text-white  text-[24px] font-bold ">Create Cover</h2>
<p className=" text-[12px] w-[200px] leading-4 text-[#EEEEEE]">Create new insurance to improve the community </p>
</div>
  </div>
</div>
<div className="w-[48%] border-[1px] rounded-lg h-[144px] bg-[#19192E] cursor-pointer hover:text-[#EEEEEE]">
  <div className="w-[90%] mx-auto pt-6 flex items-center">
<div className="w-[80px] h-[80px] border-[1px] px-auto rounded-lg bg-[#FFFFFF]">

<BsYelp size={40} className='mx-auto mt-4 '/>
</div>
<div className="ml-4 hover:text-[#EEEEEE]">

<h2 className="text-white  text-[24px] font-bold ">Create Proposal</h2>
<p className=" text-[12px] w-[200px] leading-4 text-[#EEEEEE]">Do you have a proposal to improve the community then create one </p>
</div>
  </div>
</div>

      </section>
    </main>
  )
}

export default GovernanceMain