import React from 'react'
import Claim from './Claim'

const Review = () => {
  return (
    <main className='bg-[#FFFFFF] mt-4 h-[400px] rounded-lg overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full'>
        <div className="w-[90%] mx-auto pt-2">

        <h2 className="text-[14px] font-bold mb-2"> Review Cover Claim</h2>

        <Claim/>
        </div>
    </main>
  )
}

export default Review