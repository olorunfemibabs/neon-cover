import React from 'react'

const Logo = () => {
  return (
    <div className="flex items-center justify-between gap-6 pt-[42px] pb-[45px]">
        <div className=''>
        <ImShield  className={`text-[#FFFFFF] text-[40px] ${toggleCollapse && 'text-[24px]'}`}/>
        </div>
        <span className={` text-[30px] font-bold text-[#FFFFFF] ${toggleCollapse ? "hidden" : ""}`}>Neon.</span>
  </div>
  )
}

export default Logo
