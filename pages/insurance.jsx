import TopBar from '@/components/TopBar'
import InsuranceFeatures from '@/features/insurance/InsuranceFeatures'
import React from 'react'


export default function Insurance() {
  return (
    <main className='max-h-screen h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-[#19192E] scrollbar-track-gray-100 scrollbar-thumb-rounded-full scrollbar-track-rounded-full pb-[180px]'>
<TopBar   title="Insurance"/>

<div className="w-[96%] mx-auto">
<InsuranceFeatures/>
</div>
    </main>
  )
}


