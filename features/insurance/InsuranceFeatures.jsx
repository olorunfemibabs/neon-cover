import React, { useState } from 'react'
import SingleInsureCard from './component/SingleInsureCard'
import BuyCoverForm from './component/BuyCoverForm'

const InsuranceFeatures = () => {
  const [openBuyCover, setOpenBuyCover] = useState(false)
  return (
    <main className="w-[100%]">

    <div className=' flex justify-between gap-8 flex-wrap mt-4'>
    
      <SingleInsureCard open={()=>setOpenBuyCover(true)}/>
      <SingleInsureCard open={()=>setOpenBuyCover(true)}/>
     
    </div>
    {
      openBuyCover &&
    <BuyCoverForm close={()=>setOpenBuyCover(false)}/>
    }
    </main>
  )
}

export default InsuranceFeatures